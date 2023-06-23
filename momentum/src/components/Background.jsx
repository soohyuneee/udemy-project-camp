import React, { useState, useEffect } from 'react';
import img0 from 'assets/0.jpeg';
import img1 from 'assets/1.jpeg';
import img2 from 'assets/2.jpeg';

function Background() {
  const images = [img0, img1, img2];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * images.length);
    setCurrentImageIndex(randomNumber);
  }, []);

  return (
    <>
      <img src={images[currentImageIndex]} alt="background" />
    </>
  );
}

export default Background;
