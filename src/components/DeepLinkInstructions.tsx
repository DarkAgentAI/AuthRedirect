import React from 'react';
import styles from '../styles/DeepLinkInstructions.module.css';

const DeepLinkInstructions: React.FC = () => {
  return (
    <div className={styles.instructions}>
      <p>Click 'Open' when prompted to return to the application</p>
    </div>
  );
};

export default DeepLinkInstructions;