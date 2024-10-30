import { Button } from '@/component/Button/Button';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Dialog.module.scss';

type HeaderProps = {
  children: ReactNode;
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div>
      <p className={clsx(styles.header)}>{children}</p>
      <div className={clsx(styles.line)}></div>
    </div>
  );
};

type DialogProps = {
  variant: 'success' | 'info' | 'danger';
  color: 'primary' | 'secondary' | 'danger';
  title: string;
  subtitle: string;
  isDisabled?: boolean;
};

export const Dialog: React.FC<DialogProps> = ({
  variant,
  title,
  subtitle,
  isDisabled,
}) => {
  return (
    <div className={clsx(styles.dialog)}>
      <div className={clsx(styles.body)}>
        {variant === 'danger' && (
          <img
            className={clsx(styles.icon)}
            src='src/assets/svg/icon-danger.svg'
          />
        )}
        {variant === 'info' && (
          <img
            className={clsx(styles.icon)}
            src='src/assets/svg/icon-info.svg'
          />
        )}
        {variant === 'success' && (
          <img
            className={clsx(styles.icon)}
            src='src/assets/svg/icon-success.svg'
          />
        )}
        <div className={clsx(styles.description)}>
          <p className={clsx(styles.title)}>{title}</p>
          <p className={clsx(styles.subtitle)}>{subtitle}</p>
        </div>
      </div>
      <div className={clsx(styles.buttonWrapper)}>
        <Button color='secondary' disabled={isDisabled}>
          {variant === 'success' && <span>OK</span>}
          {variant !== 'success' && <span>Cancel</span>}
        </Button>
        {variant === 'success' || (
          <Button
            color={variant === 'info' ? 'primary' : 'danger'}
            disabled={isDisabled}
          >
            {variant === 'info' && <span>Create</span>}
            {variant !== 'info' && <span>Delete</span>}
          </Button>
        )}
      </div>
    </div>
  );
};
