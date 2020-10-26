import firebase from './firebase.config'
const auth = firebase.auth()
// const dispatch = useDispatch()

export const signInWithEmail =  (user) =>
   auth.signInWithEmailAndPassword(user.email , user.password)


export const signOutUser = () => auth.signOut();