import React, { useState } from "react";
function PostListing(useState) {
    function NewListing({ user_id, owner_id, onAddProperty}) {
        const [name, setName] = useState("");
        const [city, setCity] = useState("");
        const [image, setImage] = useState("");
        const [price, setPrice] = useState("");
        const [location, setLocation] = useState("");
        const [rating, setRating] = useState("");

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

        return <form onSubmit={handleSubmit}>
            
        </form>
        
    }

    
    
}