import React from 'react';
import './components/CSS/App.css';
import { BrowserRouter as Router, Route ,Redirect} from 'react-router-dom';
import Login from './components/Page/Login';
import Register from './components/Page/Register';
import Main from './components/Page/Main';
import Adver from './components/Page/Adver';
import Contact from './components/Page/Contact';
function App() {
  console.log("giriş yapıldı.")
  return (
    <Router>
      <div>
        <div className="Pages">
         {/**<Redirect from="/" to="Login" /> */}
          <Route path="/Login" exact component={Login} />
          <Route path="/Register"  component={Register} />
          <Route path="/Main"  component={Main} />
          <Route path="/Main/Adver"  component={Adver} />
          <Route path="/Main/Contact"  component={Contact} />
        </div>
      </div>
    </Router>
  );
}
export default App;