//New listings are only done by property owners
//A property owner must be registred as an owner and not a regula user
// For this logic to work, They have to first register as owners.
// An owner registration details is persisted to an owners table
// Therefore, on clicking Add a Listing, they have to;
// i. Register as an owner
// ii. Log in as an owner*not yet implemented
// iii. Access a post property form

import react, { useState } from "react";
import PostProperty from "./PostProperty";

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
          PostProperty();
    }

    //controlled from the code here
    return (
      <>
      <div className="registerform">
          <h5>Create An Owners Account</h5>
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="John Doe"
          />
          <input
            type="text"
            value={username}
            placeholder="Johnny"
          />
          <input
            type="text"
            value={email}
            placeholder="john@doe.com"
          />
          <input
            type="text"
            value={phone}
            placeholder="254722000000"
          />
          <button type="submit">Create Account</button>  
          {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
        </form>
        </div>
      </>

    )    
}

export default NewListing;