import firebase from 'firebase';
import { auth } from './../../../firebase';

export const googleSignIn = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

export const facebookSignIn = () => auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());

