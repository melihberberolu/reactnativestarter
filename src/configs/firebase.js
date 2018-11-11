import Firebase from 'firebase';
import firebaseConfig from './firebaseConfigs';

const FirebaseInstance = Firebase.initializeApp(firebaseConfig);

export const FirebaseAuth = FirebaseInstance.auth();
