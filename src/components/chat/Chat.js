import './chat.css'
import firebase from 'firebase';
import { database, auth } from './../../firebase';
import { useState } from 'react';

const Chat = ({ chat }) => {
  const [message, setMessage] = useState('');
  const messagesCollection = database.collection('messages');

  const query = messagesCollection
    .where('chat', '==', chat)
    .orderBy('createdAt')
    .limit('20');

  const handleSubmit = async event => {
    event.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();

    await messagesCollection.add({
      uid, 
      photoURL,
      createdAt,
      message,
      chat
    });

    setMessage('');
  };

  const handleChange = event => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  return (
    <div className="chat">
      <form className="message" onSubmit={handleSubmit}>
        <textarea id="messageInput" value={message} onChange={handleChange} placeholder="Send a message"/>
        <button id="messageSubmit" type="submit" disabled={!message}>Send</button>
      </form>
    </div>
  );
};

export default Chat;