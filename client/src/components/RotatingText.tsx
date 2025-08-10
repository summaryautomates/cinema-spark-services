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
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-bold"
          style={{ minWidth: '200px', textAlign: 'center', display: 'inline-block' }}
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;