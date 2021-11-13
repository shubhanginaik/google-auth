import React, { useReducer } from 'react';
import { auth } from '../service/firebase';
import '../App.css';

const Home = ({user}) => {
    return (
        <div className="home">
            <h1>Hello,<span></span> {user.displayName}</h1>
            <img src={useReducer.photoURL} alt="" />
            <button className="button signout" onClick={() => auth.signOut()}>SignOut</button>
            
        </div>
    );
};

export default Home;