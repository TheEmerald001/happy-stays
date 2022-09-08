import React from 'react';

function NavBar() {
  return (
    <>
      <div className="welcome">
      {/* <div className='logo'><img className="logoImg" src={ require('./assets/logoImg.png')} alt="logo" /></div> */}
      <div className='companyname'>Happy Stays</div>
      <div className='authenticate'>        
        <a>LOG-IN/SIGN-UP</a>
      </div>
      </div> 
    </>
  );
}

export default NavBar;