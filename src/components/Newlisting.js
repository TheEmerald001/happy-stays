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

    const handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === "name"){
          setName(value);
      }
      if(id === "userName"){
          setUserName(value);
      }
      if(id === "email"){
          setEmail(value);
      }
      if(id === "setPhone"){
        setPhone(value);
      }     
    }
    //debugger
    const handleSubmit  = () => {
      console.log(name, username, email, phone);
    }
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch("http://localhost:9292/owners", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         name: name,
    //         username: username,
    //         email: email,
    //         phone: phone,
    //       }),
    //     })
    //       .then((r) => r.json())
    //       .then((newOwner) => onAddOwner(newOwner));
    //       return (
    //         <PostProperty/>
    //       )
    // }

    //controlled from the code here
    return (
      <>
      <div className="registerform">
          <div className="titles">Create An Owners Account</div>
          <form className="forms" onSubmit={handleSubmit}>
          <input
                type="text"
                name="name"
                value={name}
                onChange = {(e) => handleInputChange(e)}
                id="name"
                placeholder="Name: John Doe"
              />
          <input
            type="text"
            value={username}
            onChange = {(e) => handleInputChange(e)}
            id="userName"
            placeholder="Username: Johnny"
          />
          <input
            type="text"
            value={email}
            onChange = {(e) => handleInputChange(e)}
            id="email"
            placeholder="Email: Johnny@123.com"
            />
          <input
            type="text"
            value={phone}
            onChange = {(e) => handleInputChange(e)}
            id="setPhone"
            placeholder="Phone: 25472200000"
          />
          <button className="proceed" type="submit">Create Account</button>
        </form>
        </div>
      </>

    )    
}

export default NewListing;