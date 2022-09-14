import React, { usestate } from "react";

function Listing({showproperty}){
    const {image_url, name, city, price, rating} = showproperty;
    return (
        <>
            <div className="listing">
                <img className="imgs" src = {image_url} alt='img'/>
                <h3 className="propertyName">{name}</h3>
                <h3>{city}</h3>
                <h4>{price}</h4>
                <h4>{rating}</h4>
                <button className="reservebutton" id="reservebtn"> Reserve </button>                
            </div>
        </>
    )

}
export default Listing;