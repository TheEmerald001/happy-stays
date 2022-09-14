import React, { useState, useEffect } from "react";
import axios from "axios";

function Listing(){
    //const {image_url, name, city, price, rating} = showproperty;
    const [properties, setProperties] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9292/listings')
            .then(res => {
                console.log(res)
                setProperties(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            {properties.map(property =>
            <div className="listing">
            <img className="imgs" src = {property.image_url} alt='img'/>
            <h3 className="propertyName">{property.name}</h3>
            <h3>{property.city}</h3>
            <h4>{property.price}</h4>
            <h4>{property.rating}</h4>
            <button className="reservebutton" id="reservebtn"> Reserve </button>
            </div>                    
            )}                                
        </>
    )

}
export default Listing;