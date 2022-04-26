import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../Style/SignIn.css";
const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   console.log(name, email, password);
  let data = {
    name,
    email,
    password,
  };

  useEffect(() => {
    let res = localStorage.setItem("data", JSON.stringify(data));
    console.log(res);
  }, [data]);
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
                <Link to="/">
                  <button>Sign in</button>
                </Link>
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
