import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Loginwithgoogle from "./LoginWithGoogle";
import "../Style/Login.css";

const Login = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let res = JSON.parse(localStorage.getItem("data"));
    console.log(res);
  }, []);

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

            <input type="text" placeholder="Enter Your Email..." />
            <br />

            <input type="password" placeholder="Enter Your Password..." />
            <br />
            <div className="button">
              <Link to="/checkout">
                <button>Login</button>
              </Link>
            </div>
            <p>
              By clicking on Login, I accept the Terms & Conditions & Privacy
              Policy
            </p>
          </div>
          <div className="googleAuth">
            <Loginwithgoogle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
