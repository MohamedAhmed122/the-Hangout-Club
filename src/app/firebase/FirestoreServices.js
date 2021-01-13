import firebase from './firebase.config';

const db = firebase.firestore()

export const dataFromSnapshot = Snapshot =>{
    if (!Snapshot.exists) return undefined;
    const data = Snapshot.data()

    // to check the date and convert it from timeStamp to javaScript date
    for (const prop in data){
        if(data.hasOwnProperty(prop)){
            if(data[prop] instanceof firebase.firestore.Timestamp){
                data[prop] = data[prop].toDate();
            }
        }
    }
    return{
        ...data,
        id: Snapshot.id
    }
}

export const listenToEventsFromFirestore = (predicate) =>{
    const user = firebase.auth().currentUser;
    // to set  data from the db
    let event = db.collection("events").orderBy("date");
  
    switch (predicate.get("filter")) {
      case "isGoing":
        return event
          .where("attendeeId", "array-contains", user.uid)
          .where("date", ">=", predicate.get("startDate"));
  
      case "isHost":
        return event
          .where("hostUid", "==", user.uid)
          .where("date", ">=", predicate.get("startDate"));
      default:
        return event.where("date", ">=", predicate.get("startDate"));
    }
} 


export const listenToEventFromFirestore = eventId =>{
    return db.collection('events').doc(eventId) 
}

export const addEventToFirestore = event =>{
    const user = firebase.auth().currentUser;
    return db.collection('events').add({
        ...event,
        hostUid:  user.uid,
        hostedBy: user.displayName,
        hostPhotoURL: user.photoURL || null,
        attendees:firebase.firestore.FieldValue.arrayUnion({
            id: user.uid,
            displayName: user.displayName,
            photoURL:  user.photoURL || null,
        }),
        attendeeId:firebase.firestore.FieldValue.arrayUnion(user.uid)
    })
} 

export const updateEventToFirestore = event =>{
    return db.collection('events').doc(event.id).update(event)
}
export const deleteEventFromFirestore = event =>{
    return db.collection('events').doc(event.id).delete()
}
export const cancelEvent = event =>{
    return db.collection('events').doc(event.id).update({
        isCanceled: !event.isCanceled
    })
}

export const setUserProfileData = user =>{
    db.collection('users').doc(user.uid).set({
        displayName: user.displayName,
        email: user.email,
        createdAt : firebase.firestore.FieldValue.serverTimestamp()
    })
}

export const getUserProfile = userId =>{
    return db.collection('users').doc(userId)
}


export const updateProfile = async (value) => {
    const user = firebase.auth().currentUser;
    try {
        if (user.displayName !== value.displayName){
            await user.updateProfile({
                displayName: value.displayName,
            });
        }
     
      return await db.collection("users").doc(user.uid).update(value);
    } catch (error) {
      throw error;
    }
  };



  export const updateUserProfilePhoto = async (downloadURL, fileName) => {
    const user = firebase.auth().currentUser;
    const userDocRef = db.collection("users").doc(user.uid);
    try {
      //we get the data from the userDoc
      const userDoc = await userDocRef.get();
      if (!userDoc.data().photoURL) {
        await db.collection("users").doc(user.uid).update({
          photoURL: downloadURL,
        });
        // to update the user auth
         await user.updateProfile({
          photoURL: downloadURL,
        });
      }
      //add the photos to the the user's photo collection inside their doc
      return await db.collection("users").doc(user.uid).collection("photos").add({
        name: fileName,
        url: downloadURL,
      });
    } catch (error) {
      throw error;
    }
  };

  export const getUserPhotos= userId =>{
      return db.collection('users').doc(userId).collection('photos') 
  }

  export const setPhotoToMain = async photo =>{
    try {
        const user = firebase.auth().currentUser;
        await db.collection('users').doc(user.uid).update({
            photoURL: photo.url
        })

        return await user.updateProfile({
            photoURL: photo.url
        })

    } catch (error) {
        throw error
    }
  }
  export const deletePhotoFromCollection = (photoId) => {
    const userUid = firebase.auth().currentUser.uid;
    return db.collection("users").doc(userUid).collection("photos").doc(photoId).delete();
  };


  export const userJoinEvent = event =>{
      const user = firebase.auth().currentUser;
      return db.collection('events').doc(event.id).update({

        attendees:firebase.firestore.FieldValue.arrayUnion({
            id: user.uid,
            displayName: user.displayName,
            photoURL:  user.photoURL || null,
        }),
        attendeeId:firebase.firestore.FieldValue.arrayUnion(user.uid)
      })
 }

export const CancelUserPlace = async event =>{
    const user = firebase.auth().currentUser;
    try {
        const eventDoc = await db.collection('events').doc(event.id).get();
         return  db.collection('events').doc(event.id).update({
            attendeeId:firebase.firestore.FieldValue.arrayRemove(user.uid),
            attendees: eventDoc.data().attendees.filter(attendee => attendee.id !== user.uid)
        })
        
    } catch (error) {
        throw error;
    }
}



export async function followUser(profile) {
  const user = firebase.auth().currentUser;
  const batch = db.batch();
  try {
    batch.set(db.collection('following').doc(user.uid).collection('userFollowing').doc(profile.id),{
      displayName: profile.displayName,
      photoURL: profile.photoURL,
      uid: profile.id
    });
    batch.update(db.collection('users').doc(user.uid), {
      followingCount: firebase.firestore.FieldValue.increment(1)
    })
    return await batch.commit();
  } catch (error) {
    throw error;
  }
  }

  // export const unfollowUser = async (profile) =>{
  //   const user = firebase.auth().currentUser;
  //   try {
  //       await db.collection('following').doc(user.uid).collection('userFollowing').doc(profile.id)
  //       .delete()

  //       await db.collection('following').doc(profile.id).collection('userFollowers').doc(user.uid)
  //       .delete()

  //       await db.collection('users').doc(user.uid).update({
  //           followingCount: firebase.firestore.FieldValue.increment(-1)
  //       })
  //       return await db.collection('users').doc(profile.id).update({
  //           followerCount: firebase.firestore.FieldValue.increment(-1)
  //       })

  //   } catch (error) {
  //       throw error
  //   }
  // }
  
  export async function unfollowUser(profile) {
    const user = firebase.auth().currentUser;
    const batch = db.batch();
    try {
      batch.delete(db.collection('following').doc(user.uid).collection('userFollowing').doc(profile.id));
      
      batch.update(db.collection('users').doc(user.uid), {
        followingCount: firebase.firestore.FieldValue.increment(-1)
      })
  
      return await batch.commit();
    } catch (error) {
      throw error;
    }
  }
  
  export function getFollowersCollection(profileId) {
    return db.collection('following').doc(profileId).collection('userFollowers')
  }
  
  export function getFollowingCollection(profileId) {
    return db.collection('following').doc(profileId).collection('userFollowing')
  }
  
  export function getFollowingDoc(profileId) {
    const userUid = firebase.auth().currentUser.uid;
    return db.collection('following').doc(userUid).collection('userFollowing').doc(profileId).get();
  }