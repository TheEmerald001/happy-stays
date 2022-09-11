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
            name: setName,
            username: setUserName,
            email: setEmail,
            phone: setPhone,
            age: setAge,
            password: setPassword,
          }),
        })
          .then((r) => r.json())
          .then((newUser) => onAddUser(newUser));
    }

    return (
      <>
        <div className="registerform">
          <div className="titles">Create a Stays Account</div>
          <div >
            <form className="forms" onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Name: John Doe"
              />
              <input
                type="text"
                value={username}
                placeholder="Username: Johnny"
              />
              <input
                type="text"
                value={email}
                placeholder="Email: john@doe.com"
              />
              <input
                type="text"
                value={phone}
                placeholder="Phone Number: 254722000000"
              />
              <input
                type="text"
                value={age}
                placeholder="Age: 80"
              />
              <input
                type="text"
                value={password}
                placeholder="Password: ******"
              />  
              <button className="proceed" type="submit">Create Account</button>  
              {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
            </form>
          </div>
          
        </div>
      </>

    );

    // Below is controller code, that shall provide a form on
    // user clicking 'REGISTER'   
}

export default Register;