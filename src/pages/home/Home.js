import './home.css';
import Chat from './../../components/chat/Chat';
import UsersChats from './../../components/userschats/UsersChats';

const Home = ({ chat }) => {

  return (
    <div className="home">
      {chat ? <Chat chat={chat} /> : <UsersChats />}
    </div>
  );
};

export default Home;