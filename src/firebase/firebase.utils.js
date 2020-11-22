import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAiXI_GL1Z4dvwfsN0956_RRztkwOOwCEo',
  authDomain: 'crwn-ecommerce-b7b90.firebaseapp.com',
  databaseURL: 'https://crwn-ecommerce-b7b90.firebaseio.com',
  projectId: 'crwn-ecommerce-b7b90',
  storageBucket: 'crwn-ecommerce-b7b90.appspot.com',
  messagingSenderId: '803936176328',
  appId: '1:803936176328:web:f32ccee830796760a83dfd',
};

//create a new user after signin if user does not exist
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // get the user from db
  const useRef = firestore.doc(`users/${userAuth.uid}`);

  // get the user from db
  const snapShot = await useRef.get();
  //if the user does not exist create a new one, else retutn the user
  //exists is a property in the snapShort object
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  console.log(transformedCollection);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
