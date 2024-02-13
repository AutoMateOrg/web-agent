import { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function SignUser(){
  const [formData, setFormData] = useState({
    "email": "",
    "password": ""
  });
  async function handleLogin(e: any) {
    console.log(formData);
    e.preventDefault();
    await axios.post("http://localhost:3100/users/signin", { // Use the 'post' function from axios
        email: formData.email,
        password: formData.password
    });
    redirect("/")
  }
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">AutoMate</h1>
          <p className="col-lg-10 fs-4">Our mission is to help you find your best matched cars. Please sign in if you're already have an account with us. Otherwise, you can get started now.</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleLogin}>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            <hr className="my-4"/>
            <small className="text-body-secondary">By clicking Sign up, you agree to the 
              <NavLink to="https://automate-webresources.s3.ap-southeast-1.amazonaws.com/termsofuse.pdf" target="_blank">terms of use</NavLink>.
              </small>
          </form>
        </div>
    </div>
  </div>
  )
}