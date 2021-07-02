import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from './../firebase';
import Loading from './../pages/loading/Loading';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
      setLoading(false);
      if (user) history.push('/home');
    });
  }, [user, history]);

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading ? children : <Loading />}
    </AuthContext.Provider>
  );
};

