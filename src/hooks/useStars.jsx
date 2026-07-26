import { useState, useEffect } from 'react';

export const useStars = (count = 150) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      animationDuration: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  }, [count]);

  return stars;
};