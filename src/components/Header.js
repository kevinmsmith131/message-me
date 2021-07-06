import './header.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';
import { logout } from './headerServices/services';

const Header = () => {
  const history = useHistory();

  return (
    <div className="header">
      <ExitToAppIcon id="logoutIcon" onClick={() => logout(history)} />
      <div id="logo">MessageMe</div>
    </div>
  );
};

export default Header;