import React, { useEffect, useState } from 'react';
import Greeting from './Greeting';

function Login() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('username')) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleUsernameSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('username', username);
    setIsLoggedIn(true);
    setUsername('');
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Greeting setIsLoggedIn={setIsLoggedIn} />
        </>
      ) : (
        <>
          <p id="login">What is your name?</p>
          <form id="login-form" onSubmit={handleUsernameSubmit}>
            <input autoFocus required maxLength="15" type="text" onChange={handleUsernameChange} value={username} />
          </form>
        </>
      )}
    </>
  );
}

export default Login;
