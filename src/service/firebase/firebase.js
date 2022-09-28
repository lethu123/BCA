import {initializeApp} from 'firebase/app'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'

const firebaseConfig = {
  // apiKey: 'AIzaSyDoU_VlnjFJ2_xRilyBr6nAHx4rDxLYuTg',
  // authDomain: 'upload-image-hspace.firebaseapp.com',
  // projectId: 'upload-image-hspace',
  // storageBucket: 'upload-image-hspace.appspot.com',
  // messagingSenderId: '1013894623563',
  // appId: '1:1013894623563:web:426f06c5a508ba38a078ce',
  apiKey: 'AIzaSyAp4fhecm6d_anJccKHNQNLRZtu8SGdGR8',
  authDomain: 'hspace-photos.firebaseapp.com',
  projectId: 'hspace-photos',
  storageBucket: 'hspace-photos.appspot.com',
  messagingSenderId: '294403915730',
  appId: '1:294403915730:web:5d7b3075de223acaf1120b',
}
const firebaseApp = initializeApp(firebaseConfig)

export {firebaseApp, getStorage, ref, uploadBytesResumable, getDownloadURL}
