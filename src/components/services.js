import { auth } from './../../../firebase';

export const logout = history => {
  auth.signOut();
  history.push('/');
};