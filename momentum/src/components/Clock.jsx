import React, { useState, useEffect } from 'react';
import Login from './Login';

function Clock() {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const USERNAME_KEY = 'username';

  useEffect(() => {
    const username = localStorage.getItem(USERNAME_KEY);

    const timer = setInterval(() => {
      setTime(new Date());

      const hour = new Date().getHours();
      if (hour >= 6 && hour < 11) {
        setGreeting(`Good morning, ${username}.`);
      } else if (hour >= 11 && hour < 17) {
        setGreeting(`Good afternoon, ${username}.`);
      } else {
        setGreeting(`Good evening, ${username}.`);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h2 id="clock">{`${hours}:${minutes}`}</h2>
      <Login USERNAME_KEY={USERNAME_KEY} greeting={greeting} />
    </>
  );
}

export default Clock;
