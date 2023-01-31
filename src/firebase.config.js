import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: ' AIzaSyCOsu6DTcATwxd7toNfHKpMxeFkhWHbzok',
  authDomain: 'house-marketplace-app-e11cb.firebaseapp.com',
  projectId: 'house-marketplace-app-e11cb',
  storageBucket: 'house-marketplace-app-e11cb.appspot.com',
  messagingSenderId: '1035901134825',
  appId: '1:1035901134825:web:a046a01c05406f982ccd78',
}

// Initialize Firebase
const app= initializeApp(firebaseConfig)
export const db = getFirestore(app)
