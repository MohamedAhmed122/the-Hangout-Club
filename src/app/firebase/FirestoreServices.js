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

export const getEventsFromFirestore = observer =>{
   return db.collection('events').onSnapshot(observer);
} 