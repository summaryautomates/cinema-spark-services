import React, { useState, useEffect } from "react";

export interface RotatingTextProps {
  texts: string[];
  rotationInterval?: number;
  className?: string;
}

const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  rotationInterval = 3000,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (texts.length <= 1) return;
    
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 200);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  const boxStyle: React.CSSProperties = {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '12px',
    display: 'inline-block',
    minWidth: '200px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: 'opacity 0.2s ease-in-out',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
  };

  return (
    <span className={`inline-block ${className}`}>
      <span style={boxStyle} className="text-visible">
        {texts[currentIndex]}
      </span>
    </span>
  );
};

export default RotatingText;