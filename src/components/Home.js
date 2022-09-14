import React from 'react';
import Listing from './Listing'
import Filter from './Filter';
 
function Home() {
  return (
    <div>
      <Filter />
      <div>
        <fieldset>
          <legend>Top Listings Today</legend>
          <div className='listing-container'>
            {/* <Listing/> */}
            <div className="listing">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square200/373464454.webp?k=204dd69b817645bc2df1c78984b88f1b7c9f18439d288fea939be8dc58ee4e0e&o=&s=1" alt="Babira"/>
                <h3>Babira pavilion</h3>
                <h3>Nairobi</h3>
                <h4>$40</h4>
                <button className="reservebutton">RESERVE</button>
            </div>
            <div className="listing">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square200/373464454.webp?k=204dd69b817645bc2df1c78984b88f1b7c9f18439d288fea939be8dc58ee4e0e&o=&s=1" alt="Babira"/>
                <h3>Babira pavilion</h3>
                <h3>Nairobi</h3>
                <h4>$40</h4>
                <button className="reservebutton">RESERVE</button>
            </div>
            <div className="listing">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square200/373464454.webp?k=204dd69b817645bc2df1c78984b88f1b7c9f18439d288fea939be8dc58ee4e0e&o=&s=1" alt="Babira"/>
                <h3>Babira pavilion</h3>
                <h3>Nairobi</h3>
                <h4>$40</h4>
                <button className="reservebutton">RESERVE</button>
            </div>
            <div className="listing">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square200/373464454.webp?k=204dd69b817645bc2df1c78984b88f1b7c9f18439d288fea939be8dc58ee4e0e&o=&s=1" alt="Babira"/>
                <h3>Babira pavilion</h3>
                <h3>Nairobi</h3>
                <h4>$40</h4>
                <button className="reservebutton">RESERVE</button>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
 
export default Home;