import {
  REACT_APP_PROJECT_ID,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_ID,
  REACT_APP_API_KEY,
} from '@env'

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: 'testfire-1bc2f.firebaseapp.com',
  databaseURL: 'https://testfire-1bc2f.firebaseio.com',
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: 'testfire-1bc2f.appspot.com',
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_ID,
  trackingId: '',
  measurementId: '',
}

export default firebaseConfig
