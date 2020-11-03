import cuid from 'cuid';
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

export const listenToEventsFromFirestore = () =>{
   return db.collection('events');
} 
export const listenToEventFromFirestore = eventId =>{
    return db.collection('events').doc(eventId) 
}

export const addEventToFirestore = event =>{
    return db.collection('events').add({
        ...event,
        hostedBy: 'Sasha',
        hostPhotoURL: 'https://randomuser.me/api/portraits/women/21.jpg',
        attendees:firebase.firestore.FieldValue.arrayUnion({
            id:cuid(),
            displayName: 'Sasha',
            photoURL:'https://randomuser.me/api/portraits/women/21.jpg'
        })
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