import firebase from 'firebase';
import { auth } from './../../../firebase';

export const googleSignIn = () => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

export const facebookSignIn = () => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());

