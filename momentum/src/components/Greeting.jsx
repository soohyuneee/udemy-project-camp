import React, { useEffect, useState } from 'react';
import { TbLogout2 } from 'react-icons/tb';

function Greeting({ setIsLoggedIn, savedUsername }) {
  const [greeting, setGreeting] = useState('');
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const hour = new Date().getHours();
      if (hour >= 6 && hour < 11) {
        setGreeting(`Good morning, ${savedUsername}.`);
      } else if (hour >= 11 && hour < 17) {
        setGreeting(`Good afternoon, ${savedUsername}.`);
      } else {
        setGreeting(`Good evening, ${savedUsername}.`);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <section id="greeting-section">
        <h1 id="greeting">{greeting}</h1>
        <button id="logout" onClick={handleLogout}>
          <TbLogout2 size={40} />
        </button>
      </section>
    </>
  );
}

export default Greeting;
