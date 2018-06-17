import React from 'react';
import './Navigation.css';

const Navigation = ({isSignedIn,onRouteChange}) => {
  if(isSignedIn) {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick ={()=>onRouteChange('signout')} className="f3 tr link dim black underline pa3 pointer">Sign Out</p>
      </nav>
    );
  } else {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick ={()=>onRouteChange('register')} className="f3 tr link dim black underline pa3 pointer">Register</p>
        <p onClick ={()=>onRouteChange('signin')} className="f3 tr link dim black underline pa3 pointer">Sign In</p>
      </nav>
    )
  }
}

export default Navigation