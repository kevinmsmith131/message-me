import './home.css';
import Header from './../../components/header/Header';
import { ChatEngine } from 'react-chat-engine';
import config from './../../utils/config';
import logger from './../../utils/logger';
import Loading from './../loading/Loading';
import { useAuth } from './../../context/AuthContext';
import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser, createUser, setUser } from './homeServices/services';

const Home = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const refMounted = useRef(false)
  console.log(user);

  useEffect(() => {
    if(!refMounted.current) {
      refMounted.current = true;

      if (!user || user === null) history.push('/');
      else {
        getUser(user)
        .then(() => setLoading(false))
        .catch(() => {
          const formData = new FormData();
          createUser(user, formData)
            .then(avatar => { 
              setUser(avatar, formData)
              .then(() => setLoading(false))
              .catch(error => logger.error(error));
            })
            .catch(error => logger.error(error));
        });
      }
    }
  }, [user, history]);


  return (
    !user || loading 
      ? <Loading />
      : <div className="home">
          <Header />
          <ChatEngine 
            height="calc(100vh - 65px)"
            projectID={config.CHAT_ENGINE_PROJECT_ID} 
            userName={user.email} 
            userSecret={user.uid} 
          />
        </div>
  );
};

export default Home;