import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};
// Initialize Firebase

// Check that `window` is in scope for the analytics module!
if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // To enable analytics. https://firebase.google.com/docs/analytics/get-started
}

export default firebase;
