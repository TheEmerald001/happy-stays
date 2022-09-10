//New listings are only done by property owners
//A property owner must be registred as an owner and not a regula user
// For this logic to work, They have to first register as owners.
// An owner registration details is persisted to an owners table
// Therefore, on clicking Add a Listing, they have to;
// i. Register as an owner
// ii. Log in as an owner*not yet implemented
// iii. Access a post property form

import react, { useState } from "react";

function NewListing({ user_id, property_id, onAddOwner}){
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/owners", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            username: username,
            email: email,
            phone: phone,
          }),
        })
          .then((r) => r.json())
          .then((newOwner) => onAddOwner(newOwner));
    }

    //controlled from the code here
    return <form onSubmit={handleSubmit}>

    </form>    
}