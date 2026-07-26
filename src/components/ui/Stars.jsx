import React from 'react';
import { useStars } from '../../hooks/useStars';
import './Stars.css';

const Stars = ({ count = 150 }) => {
  const stars = useStars(count);

  return (
    <div className="stars">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.animationDuration}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;