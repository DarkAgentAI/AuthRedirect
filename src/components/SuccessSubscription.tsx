import React from 'react';
import styles from '../styles/SuccessMessage.module.css';
import CheckmarkAnimation from './CheckmarkAnimation';
import DeepLinkInstructions from './DeepLinkInstructions';
import RetryButton from './RetryButton';

interface SuccessSubscriptionProps {
  onRetry?: () => void;
}

const SuccessSubscription: React.FC<SuccessSubscriptionProps> = ({ onRetry }) => {
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    }
    console.log('Retry subscription success deep link');
  };

  return (
    <div className={styles.successContainer}>
      <CheckmarkAnimation />
      <h1 className={styles.title}>Subscription successful</h1>
      <p className={styles.message}>Your subscription has been successfully created.</p>
      <DeepLinkInstructions />
      <RetryButton onClick={handleRetry} />
    </div>
  );
};

export default SuccessSubscription; 