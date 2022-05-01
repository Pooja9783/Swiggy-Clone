import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../Style/SignIn.css";
import Buttons from "../Screen/Buttons";
const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nevigate = useNavigate();

  //   console.log(name, email, password);
  let data = {
    name,
    email,
    password,
  };
  const signInHandle = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      alert("Your form is Empty please fill the form...");
    } else {
      let res = localStorage.setItem("data", JSON.stringify(data));
      // console.log(res);
      nevigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <h1>
        {" "}
        <div className="signin-x">
          <div className="signin">
            <div className="signin-input">
              <h1>Sign In</h1>
              <Link to="/login">
                <p>
                  or <i>login to your account</i>{" "}
                </p>
              </Link>
              <input
                type="text"
                placeholder="Enter Your Name..."
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="Enter Your Email..."
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />

              <input
                type="password"
                placeholder="Enter Your Password..."
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <div className="button">
                <Buttons variant="orange" size={"sx"} onClick={signInHandle}>
                  Sign in
                </Buttons>
              </div>
              <p>
                By clicking on Login, I accept the Terms & Conditions & Privacy
                Policy
              </p>
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Signin;
