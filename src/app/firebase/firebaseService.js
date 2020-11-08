import { toast } from 'react-toastify';
import firebase from './firebase.config'
import { setUserProfileData } from './FirestoreServices';
const auth = firebase.auth()
// const dispatch = useDispatch()

export const signInWithEmail =  (user) =>
   auth.signInWithEmailAndPassword(user.email , user.password)


export const signOutUser = () => auth.signOut();

export const RegisterInFirebase = async cred =>{
    try {
        const response = await auth.createUserWithEmailAndPassword(cred.email, cred.password);
        await response.user.updateProfile({
            displayName: cred.displayName
        })
        return await setUserProfileData(response.user)
    } catch (error) {
        throw error;
    }
}

export const SocialLogin = async selectedProvider =>{
    let provider;

    if (selectedProvider === 'facebook'){
        provider = new firebase.auth.FacebookAuthProvider()
    }
    if (selectedProvider === 'google'){
        provider = new firebase.auth.GoogleAuthProvider();
    }
    try {
        const result = await auth.signInWithPopup(provider);
        console.log(result);
        if(result.additionalUserInfo.isNewUser){
            setUserProfileData(result.user);
        }
    } catch (error) {
        toast.error('Oops, Something Went Wrong With Social Logins')
    }
} 

export const updatePassword = password =>{

    const user = firebase.auth().currentUser;
    return user.updatePassword(password);
}


export const uploadToFirebaseStorage =(file,fileName)=>{
    const user = firebase.auth().currentUser;
    const storageRef = firebase.storage().ref();
    return storageRef.child(`${user.uid}/user_images/${fileName}`).put(file)
}

 
export const deleteFromFirbaseStorage =(fileName)=>{
    const userUid = firebase.auth().currentUser.uid;
    const storageRef = firebase.storage().ref();
    return storageRef.child(`${userUid}/user_images/${fileName}`).delete()
}

export const addNewComment = (eventId, comment) =>{
    const user = firebase.auth().currentUser;
    const newComment ={
        displayName: user.displayName,
        uid: user.uid,
        photoURL: user.photoURL,
        date: Date.now(),
        comment,
    }
    return firebase.database().ref(`chat/${eventId}`).push(newComment);
}