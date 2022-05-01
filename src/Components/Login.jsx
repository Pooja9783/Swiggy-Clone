import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../Style/Login.css";
import Buttons from "../Screen/Buttons";
const Login = () => {
  const nevigate = useNavigate();
  const [data, setData] = useState([]);
  const [email2, setEmail2] = useState("");
  const [password2, setPassword2] = useState("");
  // console.log(email, password);

  const loginHandle = (e) => {
    e.preventDefault();
    let res = JSON.parse(localStorage.getItem("data"));
    const { email, password } = res;
    // console.log(email);
    if (email == "" || password == "") {
      alert("Your Form is empty please fillthe form...");
    }
    if (email === email2 && password === password2) {
      nevigate("/checkout");
    } else {
      alert("Your Password did not match...");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-x">
        <div className="login">
          <div className="login-input">
            <h1>Login</h1>
            <Link to="/signin">
              <p>
                or <i>create an account</i>
              </p>
            </Link>

            <input
              type="text"
              placeholder="Enter Your Email..."
              onChange={(e) => setEmail2(e.target.value)}
            />
            <br />

            <input
              type="password"
              placeholder="Enter Your Password..."
              onChange={(e) => setPassword2(e.target.value)}
            />
            <br />
            <div className="button">
              <Buttons variant="orange" size={"sm"} onClick={loginHandle}>
                Login
              </Buttons>
            </div>
            <p>
              By clicking on Login, I accept the Terms & Conditions & Privacy
              Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
