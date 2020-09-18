import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  // storageBucket: "azubicapstone.appspot.com",
  // messagingSenderId: "817054423855",
  // appId: "1:817054423855:web:152e5f094d1c4053b4dfda",
  // measurementId: "G-BCELNKY4R9",
};
// Initialize Firebase

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}
