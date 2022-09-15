import React from 'react'
import PostProperty from './PostProperty'


function ownerListings() {
  return (
    <>
        <PostProperty />
        <div className='ownerlists'>
            <div className='ownergreet'>Hello {owner.username}</div>
            <img className="imgs" src = {property.image_url} alt='img'/>            
            <h4>Property Name: {property.name}</h4>
            <h4>Location:{property.location_url}</h4>
            <h4>Rating: {property.rating}</h4>
            <div className="btnspace"><button className="reservebutton" id="delist"> De-list </button></div>
        </div>

    </>
  )
}

export default ownerListings