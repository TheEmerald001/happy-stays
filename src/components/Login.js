import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth'
 
function Login(props) {
  // const [username, setUserName] = useState('');
  const [password, setPassword] =useState('');
  const [user, setUser] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  //capture input data
  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "userName"){
        setUser(value);
    }
    if(id === "password"){
        setPassword(value);
    }     
  }
  // handle button click of login form
  const handleLogin = () => {
    auth.login(user)
    navigate('/')
    console.log(user);
  }
 
  return (
    <div className='forms'>
      <div className='titles'>Log In </div>
      <h5>Please login to make and see your reservations</h5>
      <form>
        <label>Username</label>
        <input
          type="text"
          value={user}
          onChange = {(e) => handleInputChange(e)}
          id="userName"
        />
        <label>pasword</label>
        <input
          type="password"
          value={password}
          onChange = {(e) => handleInputChange(e)}
          id="password"
        />
      </form>
      <button onClick={handleLogin} className="reservebutton" id="reservebtn"> Login </button>
    </div>
  );
}
 
export default Login;