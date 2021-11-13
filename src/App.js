import { useState, useEffect } from 'react';

import GoogleLogin from './components/GoogleLogin';
import Home from './components/Home';
import firebase from './service/firebase';

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user =>{
      setUser(user);
    })
  },[])

  console.log(user);
  return (
    <div className="App">
      {user ? <Home user={user}/> : <GoogleLogin />}
    </div>
  );
}

export default App;
