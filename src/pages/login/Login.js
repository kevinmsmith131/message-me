import './login.css';
import firebase from 'firebase';
import { auth } from './../../firebase';

const Login = () => {
  const googleSignIn = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  const facebookSignIn = () => auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());

  const googleUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png';
  const FBUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png';

  return (
    <div className="login">
      <div className="buttonBox">
        <button className="googleButton" onClick={googleSignIn}>
          <div className="googleIconWrapper">
            <img id="googleIcon" src={googleUrl} alt=""/>
          </div>
          <p id="googleText"><b>Login with Google</b></p>
        </button>
        <button className="facebookButton" onClick={facebookSignIn}>
          <div className="facebookIconWrapper">
            <img id="facebookIcon" src={FBUrl} alt=""/>
          </div>
          <p id="facebookText"><b>Login with Facebook</b></p>
        </button>
      </div>
    </div>
  );
};

export default Login;