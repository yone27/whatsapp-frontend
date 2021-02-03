import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyC-XE-8mFFd90DufT0ZeO6oiZl0f8eUxVg",
    authDomain: "whatsapp-mern-9193d.firebaseapp.com",
    projectId: "whatsapp-mern-9193d",
    storageBucket: "whatsapp-mern-9193d.appspot.com",
    messagingSenderId: "718253230773",
    appId: "1:718253230773:web:578b02924d14604c580cfc",
    measurementId: "G-GCK1QGPQDJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db