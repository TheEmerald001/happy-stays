import React, { useState } from 'react';
 
function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  const handleLogin = () => {
    props.history.push('/Home');
  }
 
  return (
    <div className='forms'>
      <div className='titles'>Log In </div>
      <form>
        <label>Username</label>
        <input type="text"/>
        <label>pasword</label>
        <input type="text"/>
      </form>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input className='proceed' type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;