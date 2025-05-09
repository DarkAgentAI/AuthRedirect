import React from 'react';
import styles from '../styles/SuccessMessage.module.css';
import DeepLinkInstructions from './DeepLinkInstructions';
import RetryButton from './RetryButton';

interface CancelSubscriptionProps {
  onRetry?: () => void;
}

const CancelSubscription: React.FC<CancelSubscriptionProps> = ({ onRetry }) => {
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    }
    console.log('Retry subscription cancel deep link');
  };

  return (
    <div className={styles.successContainer}>
      <div className={styles.cancelIcon}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" stroke="#FF6B6B" strokeWidth="4"/>
          <line x1="20" y1="20" x2="44" y2="44" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round"/>
          <line x1="44" y1="20" x2="20" y2="44" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>
      <h1 className={styles.title}>Subscription operation cancelled</h1>
      <p className={styles.message}>Your subscription operation has been cancelled.</p>
      <DeepLinkInstructions />
      <RetryButton onClick={handleRetry} />
    </div>
  );
};

export default CancelSubscription; 