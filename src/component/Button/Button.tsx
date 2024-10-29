import clsx from 'clsx';
import React, { MouseEvent, ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonConfirmProps = {
  variant: 'success' | 'info' | 'danger';
  children?: ReactNode;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const ButtonConfirm: React.FC<ButtonConfirmProps> = ({ variant }) => {
  return (
    <>
      <button className={clsx(styles.secondary, styles[variant])}>
        {variant === 'success' && <span>OK</span>}
        {variant !== 'success' && <span>Cancel</span>}
      </button>
      <button className={clsx(styles.primary, styles[variant])}>
        {' '}
        {variant === 'info' && <span>Create</span>}
        {variant !== 'info' && <span>Delete</span>}
      </button>
    </>
  );
};
