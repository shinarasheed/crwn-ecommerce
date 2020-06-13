import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDzo4Njk4YeKyR5M8LHCqR9fyifwDjSyOg',
  authDomain: 'crwn-ecommerce-4a048.firebaseapp.com',
  databaseURL: 'https://crwn-ecommerce-4a048.firebaseio.com',
  projectId: 'crwn-ecommerce-4a048',
  storageBucket: 'crwn-ecommerce-4a048.appspot.com',
  messagingSenderId: '451010815900',
  appId: '1:451010815900:web:2d80521c114a5725f48a59',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const useRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await useRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await useRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return useRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
