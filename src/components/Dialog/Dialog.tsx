import React, { FC } from 'react';
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
  // i got trouble on using _exhaustiveCheck, the output from eslint is "Unexpected lexical declaration in case block", so is use this approach inspired by https://medium.com/technogise/type-safe-and-exhaustive-switch-statements-aka-pattern-matching-in-typescript-e3febd433a7a
  const _exhaustiveCheck = (_: never) => {
    throw new Error(_);
  }
  switch (variant) {
    case 'success':
      return <ImageSuccess className={clsx(styles.icon)} />;
    case 'info':
      return <ImageInfo className={clsx(styles.icon)} />;
    case 'danger':
      return <ImageDanger className={clsx(styles.icon)} />;
    default:
      // const _exhaustiveCheck: never = variant;
      // throw new Error(_exhaustiveCheck);
      return _exhaustiveCheck(variant);
  }
};

export const Dialog: FC<DialogProps> = ({
  title,
  description,
  variant,
  confirmValue = 'Confirm',
  isDisabled = false,
  ...props
}) => {
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
              onClick={props.onClose}
              isDisabled={isDisabled}
            >
              {confirmValue}
            </Button>
          )}

          {variant !== 'success' && (
            <>
            <Button
              color='secondary'
              onClick={props.onClose}
              isDisabled={isDisabled}
            >
              Cancel
            </Button>
            <Button
              color={variant === 'info' ? 'primary' : 'danger'}
              onClick={props.onConfirm}
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