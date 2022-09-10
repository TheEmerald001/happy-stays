import React, { useState } from "react";

function Register({onAddUser}) {
    // All constants to be used in this registaration form are used here
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");

    //Here is a hanle submit function that shall allow updating this data on the backend
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            username: username,
            email: email,
            phone: phone,
            age: age,
            password: password,
          }),
        })
          .then((r) => r.json())
          .then((newUser) => onAddUser(newUser));
    }

    return (
      <>
        <div className="registerform">
          <h5>Create a Stays Account</h5>
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
          <input
            type="text"
            value={age}
            placeholder="80"
          />
          <input
            type="text"
            value={password}
            placeholder="******"
          />  
          <button type="submit">Create Account</button>  
          {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
        </form>
        </div>
      </>

    );

    // Below is controller code, that shall provide a form on
    // user clicking 'REGISTER'   
}

export default Register;