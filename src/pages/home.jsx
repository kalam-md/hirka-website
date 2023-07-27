import { useState } from 'react';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  const images = [
    './img/2.png',
    './img/3.png',
    './img/4.png',
    './img/5.png',
    './img/6.png',
    './img/7.png',
    './img/8.png',
    './img/9.png',
    './img/10.png',
    './img/11.png',
    './img/12.png',
    './img/13.png',
    './img/14.png',
    './img/15.png',
    './img/16.png',
    './img/17.png',
    './img/18.png',
    './img/19.png',
    './img/20.png',
  ];

  const handleImageClick = () => {
    // Increase the index by 1 and reset to 0 if it goes beyond the array length
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <header className="flex justify-center mb-12 relative md:mt-4">
      <img src="./img/header2.png" alt="header" className="2xl:w-[1000px] md:w-[650px] w-[360px]"/>
      
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`shoes-${index + 2}`} // Adding 2 to the index to match your image names
          className={`mt-5 md:mt-0 w-[850px] 2xl:w-[1000px] absolute ${currentImageIndex === index ? '' : 'hidden'}`}
          onClick={handleImageClick}
        />
      ))}
    </header>
  )
}