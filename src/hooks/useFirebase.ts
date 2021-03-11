import * as firebase from 'firebase'
import firebaseConfig from '../../firebaseconfig'

export default function useFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }

  const getVerificationId = async (
    phone: string,
    verifier: firebase.auth.ApplicationVerifier
  ) => {
    const phoneAuthProvider = new firebase.auth.PhoneAuthProvider()
    const verificationId = await phoneAuthProvider.verifyPhoneNumber(
      phone,
      verifier
    )

    return verificationId
  }

  const getIdToken = async () => {
    const user = firebase.auth().currentUser

    return user?.getIdToken()
  }

  const signin = async (verificationId: string, verificationCode: string) => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    )

    const userCredential = await firebase
      .auth()
      .signInWithCredential(credential)

    return userCredential.user?.getIdToken()
  }

  const signout = () => {
    return firebase.auth().signOut()
  }

  return { getVerificationId, getIdToken, signin, signout }
}
