import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { login, useAuth } from "../firebase/firebase";
import Navbar from "./Navbar";
import "../Style/Login.css";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function loginButton() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Login Error!");
    }
    setLoading(false);
  }
  return (
    <div>
      <Navbar />
      <div className="login-x">
        <div className="login">
          <div className="login-input">
            <h1>Login</h1>
            <p>
              or <i>create an account</i>
            </p>
            <input
              ref={emailRef}
              type="text"
              placeholder="Enter Your Email..."
            />
            <br />

            <input
              ref={passwordRef}
              type="password"
              placeholder="Enter Your Password..."
            />
            <br />
            <div className="button">
              <Link to="/checkout">
                <button disabled={loading} onClick={loginButton}>
                  Login
                </button>
              </Link>
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
