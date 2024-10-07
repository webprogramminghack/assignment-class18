import styles from './Card.module.scss';
import React, {
  ReactNode,
} from 'react';
import { Button } from "../Button";
import clsx from 'clsx';

type CardProps = {
  color?: 'primary' | 'secondary' | 'danger';
  title: string;
  content: string;
  children?: ReactNode;
  disabled?: boolean;
};

export const Card: React.FC<CardProps> = ({
  color = 'primary',
  title,
  content,
  // ...remainingProps
}) => {
  return (
    <div
      className={clsx(styles.card)}
    >
      <div
        className={clsx(styles.cardContent)}
      >
        <img src="" alt="icon" />
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
      <div
        className={clsx(styles.cardFooter)}
      >
        <Button color={color}>Cancel</Button>
        <Button>Create</Button>
      </div>
    </div>
  )
}