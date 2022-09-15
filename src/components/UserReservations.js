import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useAuth } from './auth'

function UserReservations() {
    const [properties, setProperties] = useState([]);
    const auth = useAuth
    console.log(auth.username)

    useEffect(() => {
        axios.get(`http://localhost:9292/listings/{auth.user}`)
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
        <div className='userlist'>
            <div className='usergreet'>Hello {auth.user}</div>
            <img className="imgs" src = {property.image_url} alt='img'/>
            <h3>Here is your reservation</h3>            
            <h4>Property Name: {property.name}</h4>
            <h4>Location:{property.location_url}</h4>
            <h4>Contact Details: Phone-{}</h4>
        </div>
        )}

    </>
  )
}

export default UserReservations