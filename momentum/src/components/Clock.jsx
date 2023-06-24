import React, { useState, useEffect } from 'react';
import Login from './Login';

function Clock() {
  const [time, setTime] = useState(new Date());
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h2 id="clock">{`${hours}:${minutes}`}</h2>
      <Login />
    </>
  );
}

export default Clock;
