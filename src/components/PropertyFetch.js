import React, { useState, useEffect} from 'react'
import axios from 'axios'

function PropertyFetch() {
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
    <div>
        <ul>
            {
               properties.map(property =>
                <>
                    <li key={property.id}>{property.name} {property.price}</li> 
                    <li key={property.id}>{property.image_url}</li>
                </> 
               
            )}
        </ul>
        
    </div>
  )
}

export default PropertyFetch;