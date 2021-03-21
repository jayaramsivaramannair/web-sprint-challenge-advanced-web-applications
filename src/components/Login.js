import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const [logging, setLogging] = useState(false);
  const history = useHistory();

  const formChange = (evt) => {
    console.log(evt.target.name, evt.target.value);
    setForm({ ...form, [evt.target.name]: evt.target.value });
  }

  const formSubmit = (evt) => {
    evt.preventDefault();
    setLogging(true);
    axios.post('http://localhost:5000/api/login', form)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('authToken', res.data.payload);
        history.push('/BubblePage')
      })
      .catch((err) => {
        console.log(err);
      })
    setForm({ ...form, username: '', password: '' });
    setLogging(false);
  }


  useEffect(() => {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });

  if (logging) {
    return <div>Loggin in User......</div>
  }
  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <p>Build a login page here</p>
      </h1>
      <form onSubmit={formSubmit}>
        <label >username:
            <input
            type="text"
            placeholder="username"
            value={form.username}
            name="username"
            onChange={formChange}
          />
        </label>
        <label >password:
            <input
            type="text"
            placeholder="password"
            value={form.password}
            name="password"
            onChange={formChange}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.