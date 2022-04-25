import React from "react";
import { useState } from "react";

import { GoogleLogin, GoogleLogout } from "react-google-login";
const Loginwithgoogle = () => {
  const clientId =
    "248529140398-57vtdtuj1fn89hpg3ncmlcjmp4uhb947.apps.googleusercontent.com";
  const [loginBtn, setLoginBtn] = useState(true);
  const [logOutBtn, setLogOutBtn] = useState(false);

  const OnLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setLoginBtn(false);
    setLogOutBtn(true);
  };
  const OnFailureSuccess = (res) => {
    console.log("Login Failed:", res);
  };
  const OnSignoutSuccess = () => {
    alert("You have been signed out successfully");
    setLoginBtn(true);
    setLogOutBtn(false);
    console.clear();
  };

  return (
    <div>
      {loginBtn ? (
        <GoogleLogin
          className="h-10 rounded-md "
          clientId={clientId}
          buttonText="Login"
          onSuccess={OnLoginSuccess}
          onFailure={OnFailureSuccess}
          cookiePolicy={"single_host_origin"}
        />
      ) : null}
      {logOutBtn ? (
        <>
          <GoogleLogout
            className="h-10 rounded-md "
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={OnSignoutSuccess}
          ></GoogleLogout>
        </>
      ) : null}
    </div>
  );
};

export default Loginwithgoogle;
