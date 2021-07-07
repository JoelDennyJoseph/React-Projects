import Login from "./components/login";
import SignUp from "./components/signup";
import Profile from "./components/profile";
import NotFound from "./components/notFound";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' component={ Profile } exact/>
          <Route path='/Login' component={ Login } />
          <Route path='/Signup' component={ SignUp } />
          <Route component={ NotFound } />
        </Switch>  
      </div>
    </BrowserRouter>
  );
}

export default App;