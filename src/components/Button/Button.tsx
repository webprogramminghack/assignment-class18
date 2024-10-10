import styles from './Button.module.scss';
import React, { ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  color?: 'primary' | 'secondary' | 'danger';
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  children,
  onClick,
  ...remainingProps
}) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary',
        [styles.danger]: color === 'danger',
      })}
      onClick={onClick}
      {...remainingProps}
    >
      <span>{children}</span>
    </button>
  );
};