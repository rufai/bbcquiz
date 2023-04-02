import React, { useState } from "react";

import "./style.css";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome Back!</h1>
          <button className="login-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1>Please Login</h1>
          <button className="logout-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
