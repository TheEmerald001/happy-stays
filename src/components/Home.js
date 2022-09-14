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
            <Listing/>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
 
export default Home;