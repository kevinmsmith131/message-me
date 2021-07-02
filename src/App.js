import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { AuthContextProvider } from './context/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
