import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAm9a6dOMDfk5bMWuVE2s2pd_JLWaOTpOk",
    authDomain: "facebook-clone-c9b36.firebaseapp.com",
    projectId: "facebook-clone-c9b36",
    storageBucket: "facebook-clone-c9b36.appspot.com",
    messagingSenderId: "549839602488",
    appId: "1:549839602488:web:b141dcd4a46d735db4b7cd",
    measurementId: "G-QVLJG3MKPY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider,storage,db };
export default db;