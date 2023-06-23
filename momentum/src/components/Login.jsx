import React, { useEffect, useState } from 'react';
import Greeting from './Greeting';

function Login({ USERNAME_KEY, greeting }) {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(USERNAME_KEY)) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleUsernameSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, username);
    setIsLoggedIn(true);
    setUsername('');
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Greeting USERNAME_KEY={USERNAME_KEY} setIsLoggedIn={setIsLoggedIn} greeting={greeting} />
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
