// src/components/BackgroundBlobs.jsx

import { useEffect, useState } from 'react';
import './BackgroundBlobs.css';

const BLOB_TRANSFORMS = [
  { xFactor: 80, yFactor: 60 },
  { xFactor: -100, yFactor: 100 },
  { xFactor: 120, yFactor: -80 },
  { xFactor: -150, yFactor: -150 },
];

const BackgroundBlobs = () => {
  const [cursorOffset, setCursorOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorOffset = (event) => {
      const offsetX = event.clientX / window.innerWidth - 0.5;
      const offsetY = event.clientY / window.innerHeight - 0.5;
      setCursorOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener('mousemove', updateCursorOffset);
    return () => window.removeEventListener('mousemove', updateCursorOffset);
  }, []);

  const calculateTransform = (xFactor, yFactor) => {
    return `translate(${cursorOffset.x * xFactor}px, ${cursorOffset.y * yFactor}px)`;
  };

  return (
    <div className="background-blobs">
      {BLOB_TRANSFORMS.map(({ xFactor, yFactor }, index) => (
        <div
          key={index}
          className="blob"
          style={{ transform: calculateTransform(xFactor, yFactor) }}
        />
      ))}
    </div>
  );
};

export default BackgroundBlobs;
