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
        <motion.span
          key={currentIndex}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
          className="inline-block bg-blue-600 px-6 py-3 rounded-xl font-bold shadow-lg"
          style={{ 
            minWidth: '200px', 
            textAlign: 'center', 
            display: 'inline-block',
            color: '#ffffff !important',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            backgroundColor: '#2563eb'
          }}
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;