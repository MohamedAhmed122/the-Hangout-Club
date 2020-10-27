import firebase from './firebase.config'
const auth = firebase.auth()
// const dispatch = useDispatch()

export const signInWithEmail =  (user) =>
   auth.signInWithEmailAndPassword(user.email , user.password)


export const signOutUser = () => auth.signOut();

export const RegisterInFirebase = async cred =>{
    try {
        const response = await auth.createUserWithEmailAndPassword(cred.email, cred.password);
        return await response.user.updateProfile({
            displayName: cred.displayName
        })
    } catch (error) {
        throw error;
    }
}