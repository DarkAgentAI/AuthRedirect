import React from 'react';
import styles from '../styles/SuccessMessage.module.css';
import CheckmarkAnimation from './CheckmarkAnimation';
import DeepLinkInstructions from './DeepLinkInstructions';
import RetryButton from './RetryButton';

interface SuccessMessageProps {
  onRetry?: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onRetry }) => {
  const handleRetry = () => {
    // Call the onRetry prop if provided
    if (onRetry) {
      onRetry();
    }
    
    console.log('Retry deep link');
  };

  return (
    <div className={styles.successContainer}>
      <CheckmarkAnimation />
      <h1 className={styles.title}>Authentication Successful</h1>
      <DeepLinkInstructions />
      <RetryButton onClick={handleRetry} />
    </div>
  );
};

export default SuccessMessage;