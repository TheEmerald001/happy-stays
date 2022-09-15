import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useAuth} from './auth'

function Listing(){
    const [properties, setProperties] = useState([])
    const auth = useAuth();
    const navigate = useNavigate();
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
    const userReservation = () => {
        !!auth.user &&
        navigate('/reserved')
        !auth.user &&
        navigate('/login')
    }
    return (
        <>
            {properties.map(property =>
            <div className="listing">
            <img className="imgs" src = {property.image_url} alt='img'/>
            <h3 className="propertyName">Name: {property.name}</h3>
            <h3>City: {property.city}</h3>
            <h4>price: ${property.price}</h4>
            <h4>rating: {property.rating} / 10</h4>
            <div onClick={userReservation} className="btnspace"><button className="reservebutton" id="reservebtn"> Reserve </button></div>            
            </div>                    
            )}                                
        </>
    )

}
export default Listing;