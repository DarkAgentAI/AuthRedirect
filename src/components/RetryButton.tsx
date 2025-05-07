import React from 'react';
import styles from '../styles/RetryButton.module.css';
import { ArrowRight } from 'lucide-react';

interface RetryButtonProps {
  onClick: () => void;
}

const RetryButton: React.FC<RetryButtonProps> = ({ onClick }) => {
  return (
    <button 
      className={styles.retryButton} 
      onClick={onClick}
      aria-label="Retry deep link"
    >
      <span>Return to App</span>
      <ArrowRight size={18} />
    </button>
  );
};

export default RetryButton;