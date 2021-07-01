import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { auth } from './firebase';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

const App = () => {
  const [user] = useAuthState(auth);
  const [chat, setChat] = useState(undefined);

  return (
    <>
      {user ? <Home chat={chat} /> : <Login />}
    </>
  );
};

export default App;
