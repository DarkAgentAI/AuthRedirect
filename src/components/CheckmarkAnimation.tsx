import React, { useEffect, useState } from 'react';
import styles from '../styles/CheckmarkAnimation.module.css';

const CheckmarkAnimation: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.checkmarkContainer}>
      <svg 
        className={`${styles.checkmark} ${animate ? styles.animate : ''}`} 
        width="80" 
        height="80" 
        viewBox="0 0 80 80"
      >
        <circle 
          className={styles.checkmarkCircle} 
          cx="40" 
          cy="40" 
          r="36" 
          fill="none" 
        />
        <path 
          className={styles.checkmarkCheck} 
          fill="none" 
          d="M25,40 l10,10 l20,-25" 
        />
      </svg>
    </div>
  );
};

export default CheckmarkAnimation;