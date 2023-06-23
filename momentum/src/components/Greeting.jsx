import React from 'react';
import { TbLogout2 } from 'react-icons/tb';

function Greeting({ setIsLoggedIn, greeting }) {
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };

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
