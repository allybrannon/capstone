import React, { useState } from "react";
import "../App.css";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const changeFirstname = (e) => {
    setFirstName(e.target.value);
  };
  const changeLastname = (e) => {
    setLastName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeContact = (e) => {
    setContact(e.target.value);
  };
  const handleSubmit = async (e) => {
    //e.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      user_password: password,
      contact_me: contact,
    };
    const url = "http://localhost:2000/adduser";
    const response = await postAPI(url, data);
    if (response.status === 200) {
      alert("Thank you for signing up!");
    }
    if (response.status !== 200) {
      alert("Unable to signup. Please try again later or go to login page.");
    }
  };
  const postAPI = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  };
  return (
    <div>
      <h1>Sign Up Here!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={changeFirstname}
          required
        />
        <br />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={changeLastname}
          required
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={changeEmail}
          required
        />
        <br />
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={changePassword}
          required
        />
        <br />
        <input
          type="text"
          name="contact"
          placeholder="Contact?"
          onChange={changeContact}
          required
        />
        <br />
        <button type="submit" data-testid="submitButton">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Signup;
