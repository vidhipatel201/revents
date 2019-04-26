import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyChHwi41uvxg4fjt8ZBETfIWxMSk2clZpA",
    authDomain: "revents-bc5cc.firebaseapp.com",
    databaseURL: "https://revents-bc5cc.firebaseio.com",
    projectId: "revents-bc5cc",
    storageBucket: "revents-bc5cc.appspot.com",
    messagingSenderId: "938259842917"
}

firebase.initializeApp(firebaseConfig);
const firestore =firebase.firestore();
const settings={
    timestampsInSnapshots:true
}
firestore.settings(settings);

export default firebase;