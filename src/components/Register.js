import React, { useState } from "react";

function Register() {
    // All constants to be used in this registaration form are used here
    
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");

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
      if(id === "setAge"){
        setAge(value);
      }
      if(id === "password"){
          setPassword(value);
      }     
    }
    //debugger
    // const handleSubmit  = () => {
    //   console.log(name, username, email, phone, age, password);
    // }

    //Here is a handle submit function that shall allow updating this data on the backend
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
            phone_number: phone,
            age: age,
            password: password,
          }),
        })
          .then((r) => r.json())
    }
    
  // Below is controller code, that shall provide a form on
  // user clicking 'REGISTER'
    return (
      <>
        <div className="registerform">
          <div className="titles">Create a Stays Account</div>
          <div >
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
                placeholder="Email: johhny@doe.com"
              />
              <input
                type="text"
                value={phone}
                onChange = {(e) => handleInputChange(e)}
                id="setPhone"
                placeholder="Phone: (***)-(**)-(***)-(***)"
              />
              <input
                type="text"
                value={age}
                onChange = {(e) => handleInputChange(e)}
                id="setAge"
                placeholder="Age: 80"
              />
              <input
                type="password"
                value={password}
                onChange = {(e) => handleInputChange(e)}
                id="password"
                placeholder="Password: ******"
              />  
              <div className="centerbutton"><button className="reservebutton" type="submit">Create Account</button></div>
            </form>
          </div>
          
        </div>
      </>

    );   
}

export default Register;