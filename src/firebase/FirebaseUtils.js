import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBF6klYzYFxqwO7_9NFCmScc8Q4sXaJC4c',
  authDomain: 'clothing-db-a89bc.firebaseapp.com',
  databaseURL: 'https://clothing-db-a89bc.firebaseio.com',
  projectId: 'clothing-db-a89bc',
  storageBucket: '',
  messagingSenderId: '438982335615',
  appId: '1:438982335615:web:af0e83e9ff87d9fa'
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData })
    } catch (e) {
      console.error('Error creating user: ', e.message)
    }
  }
  return userRef
}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  // add collection title to collection objects
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

// add item collections or whatever you want
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  console.log(collectionRef)
  // batch all calls so if one fails all of them fails
  // so it will save us from inconsistencies
  const batch = firestore.batch()
  objectsToAdd.forEach(object => {
    // create a new document
    // firebase will give a new document reference for the collection and generate an random id
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, object)
  })
  return await batch.commit()
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()
// trigger google auth popup whenever we use this provider variable
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

