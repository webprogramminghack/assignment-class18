import styles from './Button.module.scss';
import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  color?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
  onClick?: () => void;
  isDisabled?: boolean | undefined;
};

export const Button: React.FC<ButtonProps> = ({
  color = 'secondary',
  children,
  onClick,
  isDisabled,
}) => {
  return (
    <button
      className={clsx(styles.button, styles[color], isDisabled && styles.disabled)}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
