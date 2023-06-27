import React, { useEffect, useState } from 'react';
import Greeting from './Greeting';

function Login({ savedUsername }) {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (savedUsername) {
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
          <Greeting setIsLoggedIn={setIsLoggedIn} savedUsername={savedUsername} />
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
