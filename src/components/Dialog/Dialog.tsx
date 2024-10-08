import React from 'react';
import clsx from 'clsx';
import styles from './Dialog.module.scss';
import ImageSuccess from '@/assets/svg/icon-success.svg';
import ImageInfo from '@/assets/svg/icon-info.svg';
import ImageDanger from '@/assets/svg/icon-danger.svg';
import { Button } from '@/components/Button';

type DialogVariant = 'success' | 'info' | 'danger';

type DialogProps<V extends DialogVariant = DialogVariant> = {
  title: string;
  description: string;
  variant: V;
  confirmValue?: string;
  isDisabled?: V extends 'success' ? never : boolean;
  onConfirm?: () => void;
  onClose?: () => void;
};

const getSrcVariant = (variant: DialogProps['variant']): React.ReactElement => {
  switch (variant) {
    case 'success':
      return <ImageSuccess className={clsx(styles.icon)} />;
    case 'info':
      return <ImageInfo className={clsx(styles.icon)} />;
    case 'danger':
      return <ImageDanger className={clsx(styles.icon)} />;
    default: {
      const _exhaustiveCheck: never = variant;
      throw new Error(`Unhandled variant: ${_exhaustiveCheck}`);
    }
  }
};

export const Dialog = <V extends DialogVariant>({
  title,
  description,
  variant,
  confirmValue = 'Confirm',
  isDisabled,
  onConfirm,
  onClose,
}: DialogProps<V>) => {
  return (
    <div className={clsx(styles.dialog)}>
      <div className={clsx(styles.body)}>
        {getSrcVariant(variant)}
        <div className={clsx(styles.content)}>
          <h3 className={clsx(styles.title)}>{title}</h3>
          <p className={clsx(styles.description)}>{description}</p>
        </div>
      </div>

      <div className={clsx(styles.footer)}>
        <div className={clsx(styles.content)}>

          {/* conditional rendering, https://react.dev/learn/conditional-rendering# */}
          {variant === 'success' && (
            <Button
              onClick={onClose}
            >
              {confirmValue}
            </Button>
          )}

          {variant !== 'success' && (
            <>
            <Button
              color='secondary'
              onClick={onClose}
              isDisabled={isDisabled}
            >
              Cancel
            </Button>
            <Button
              color={variant === 'info' ? 'primary' : 'danger'}
              onClick={onConfirm}
              isDisabled={isDisabled}
            >
              {confirmValue}
            </Button>
            </>
          )}

        </div>
      </div>
    </div>
  );
};