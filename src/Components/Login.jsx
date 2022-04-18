import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { login, useAuth } from "../firebase/firebase";
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
      <div className="mo">
        <input ref={emailRef} type="text" placeholder="Enter Your Email..." />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter Your Password..."
        />

        <Link to="/checkout">
          <button disabled={loading} onClick={loginButton}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
