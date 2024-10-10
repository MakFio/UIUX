import React from 'react';
import styles from './GifCard.module.css';

interface GifCardProps {
  gifUrl: string;
}

export const GifCard = ({ gifUrl }: GifCardProps) => {
  return (
    <div className={styles.gifCard}>
      <img src={gifUrl} alt="GIF" className={styles.gifImage} />
    </div>
  );
};
