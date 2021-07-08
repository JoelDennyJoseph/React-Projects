import Login from "./components/login";
import SignUp from "./components/signup";
import Profile from "./components/profile";
import NotFound from "./components/notFound";
import HomePage from "./components/homePage";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' component={ HomePage } exact/>
          <Route path='/Profile' component={ Profile } />
          <Route path='/Login' component={ Login } />
          <Route path='/Signup' component={ SignUp } />
          <Route component={ NotFound } />
        </Switch>  
      </div>
    </BrowserRouter>
  );
}

export default App;