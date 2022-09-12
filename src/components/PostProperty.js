import React, { useState, setState } from "react";
function PostProperty({user_id, owner_id, onAddProperty}) {
     const [name, setName] = useState("");
     const [city, setCity] = useState("");
     const [image, setImage] = useState("");
     const [price, setPrice] = useState("");
     const [location, setLocation] = useState("");
     const [rating, setRating] = useState("")

      const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "propertyName"){
            setName(value);
        }
        if(id === "cityName"){
            setCity(value);
        }
        if(id === "propertyImage"){
            setImage(value);
        }
        if(id === "propertyPrice"){
          setPrice(value);
        }
        if(id === "propertyLocation"){
          setLocation(value);
        }
        if(id === "propertyRating"){
            setRating(value);
        }     
      }
      //debugger
      const handleSubmit  = () => {
        console.log(name, city, image, location, price, rating);
      }

    //  function handleSubmit(e) {
    //      e.preventDefault();
    //      fetch("http://localhost:9292/listings", {
    //        method: "POST",
    //        headers: {
    //          "Content-Type": "application/json",
    //        },
    //        body: JSON.stringify({
    //          name: name,
    //          city: city,
    //          image: image,
    //          price: price,
    //          location: location,
    //          rating: rating,
    //        }),
    //      })
    //        .then((r) => r.json())
    //        .then((newListing) => onAddProperty(newListing));
    //   }
     
     return (
       <>
       <div className="registerform">
          <div className="titles">Post a Stay</div>
          <form className="forms" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            id="propertyName"
            onChange = {(e) => handleInputChange(e)}            
            placeholder="e.g. Makazi Homes"
          />
          <input
            type="text"
            value={city}
            id="cityName"
            onChange = {(e) => handleInputChange(e)}
            placeholder="e.g. Nairobi"
          />
          <input
            type="text"
            value={image}
            id="propertyImage"
            onChange = {(e) => handleInputChange(e)}
            placeholder="image/url"
          />
          <input
            type="text"
            value={location}
            id="propertyLocation"
            onChange = {(e) => handleInputChange(e)}
            placeholder="maps/url"
          />
          <input
            type="text"
            value={price}
            id="propertyPrice"
            onChange = {(e) => handleInputChange(e)}
            placeholder="$0.00"
          />
          <input
            type="text"
            value={rating}
            id="propertyRating"
            onChange = {(e) => handleInputChange(e)}
            placeholder="1-10"
          />
          <button className="proceed" type="submit">Post Property</button>  
          {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
        </form>
        </div>
       </>
     ) 
     
}

export default PostProperty;