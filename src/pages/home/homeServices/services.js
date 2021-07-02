import config from './../../../utils/config';
import axios from 'axios';

export const getFile = async url => {
  const response = await fetch(url);
  const data = await response.blob();
  return new File([data], 'userPhoto.jpg', { type: 'image/jpeg' });
};

export const getUser = async user => {
  return await axios.get('https://api.chatengine.io/users/me/', {
    headers: {
      'project-id': config.CHAT_ENGINE_PROJECT_ID,
      'user-name': user.email,
      'user-secret': user.uid
    }
  });
};

export const createUser = async (user, formData) => {
    formData.append('email', user.email);
    formData.append('username', user.displayName);
    formData.append('secret', user.uid);

    return await getFile(user.photoURL);
};

export const setUser = async (avatar, formData) => {
  formData.append('avatar', avatar, avatar.name);
  return await axios.post(
    'https://api.chatengine.io/users/',
    formData,
    { headers: { 'private-key': config.CHAT_ENGINE_PRIVATE_KEY } }
  );
};