import React, { useState } from "react";
function PostProperty({user_id, owner_id, onAddProperty}) {
     const [name, setName] = useState("");
     const [city, setCity] = useState("");
     const [image, setImage] = useState("");
     const [price, setPrice] = useState("");
     const [location, setLocation] = useState("");
     const [rating, setRating] = useState("")
     function handleSubmit(e) {
         e.preventDefault();
         fetch("http://localhost:9292/listings", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             name: name,
             city: city,
             image: image,
             price: price,
             location: location,
             rating: rating,
           }),
         })
           .then((r) => r.json())
           .then((newListing) => onAddListing(newListing));
      }
     
     return (
       <>
       <div className="registerform">
          <h5>Post a Stay</h5>
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="e.g. Makazi Homes"
          />
          <input
            type="text"
            value={username}
            placeholder="e.g. Nairobi"
          />
          <input
            type="text"
            value={image}
            placeholder="image/url"
          />
          <input
            type="text"
            value={price}
            placeholder="$0.00"
          />
          <input
            type="text"
            value={price}
            placeholder="$0.00"
          />
          <input
            type="text"
            value={rating}
            placeholder="1-10"
          />
          <button type="submit">Post Property</button>  
          {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
        </form>
        </div>
       </>
     ) 
     
}

export default PostProperty;