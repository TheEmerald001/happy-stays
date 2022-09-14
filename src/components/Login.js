import React, { useState } from 'react';
 
function Login(props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] =useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //capture input data
  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "userName"){
        setUserName(value);
    }
    if(id === "password"){
        setPassword(value);
    }     
  }
 
  // handle button click of login form
  const handleLogin = () => {
    console.log(username, password);
  }
 
  return (
    <div className='forms'>
      <div className='titles'>Log In </div>
      <form>
        <label>Username</label>
        <input
          type="text"
          value={username}
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
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input className='proceed' type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}
 
export default Login;