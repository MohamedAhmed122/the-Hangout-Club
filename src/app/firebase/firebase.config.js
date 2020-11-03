import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCBquklNgBd7lFSt5FE_h_gJqEwePL0crs",
    authDomain: "hangout-club.firebaseapp.com",
    databaseURL: "https://hangout-club.firebaseio.com",
    projectId: "hangout-club",
    storageBucket: "hangout-club.appspot.com",
    messagingSenderId: "384948079088",
    appId: "1:384948079088:web:35450109b017c1c1187535",
    measurementId: "G-9QFJXLR1M0"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


firebase.firestore()

export default firebase;

// UseFirestoreDoc({
//   query: () => getUserProfile(match.params.id),
//   data: (profile) => dispatch(ListenToUserProfile(profile)),
//   deps: [dispatch, match.params.id],
// });

// if ((loading && !currentUserProfile) || (!currentUserProfile && !error))
//   return <Loading >Loading Profile...</Loading>