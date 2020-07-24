import React from 'react';
import './components/CSS/App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Login from './components/Page/Login';
import Register from './components/Page/Register';
import Nav from './components/Page/TopNavbar';
function App() {
  console.log("giriş yapıldı.")
  return (
    <Router>
      <div>
        <div  className="App">
        <Nav/>
        </div>

        <div className="Pages">

        <Route path="/" exact component={Home}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Register" component={Register}/>
        </div>

        
      </div>
    </Router>
  );
}
const Home = () => {
  return(
    <div>
      <h1>HOME PAGE</h1>
    </div>
  )
}
export default App;