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
