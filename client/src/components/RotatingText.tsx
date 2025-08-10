import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface RotatingTextProps {
  texts: string[];
  rotationInterval?: number;
  className?: string;
  transition?: any;
  initial?: any;
  animate?: any;
  exit?: any;
}

const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  rotationInterval = 3000,
  className = "",
  transition = { type: "spring", damping: 15, stiffness: 200 },
  initial = { y: 20, opacity: 0 },
  animate = { y: 0, opacity: 1 },
  exit = { y: -20, opacity: 0 }
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  return (
    <span className={`inline-block relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
          style={{ 
            minWidth: '200px', 
            textAlign: 'center', 
            display: 'inline-block',
            color: '#ffffff',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            backgroundColor: '#2563eb',
            padding: '12px 24px',
            borderRadius: '12px',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #1d4ed8'
          }}
        >
          <span style={{ color: '#ffffff', fontSize: 'inherit' }}>
            {texts[currentIndex]}
          </span>
        </motion.div>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;