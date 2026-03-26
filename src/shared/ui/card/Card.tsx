import type { ReactNode } from 'react';
import styles from './card.module.css';

interface Props {
  children?: ReactNode;
  className?: string;
}

const Card = ({ children, className }: Props) => {
  return <div className={`${styles.card}${className ? ` ${className}` : ''}`}>{children}</div>;
};

export default Card;
