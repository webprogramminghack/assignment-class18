import styles from './Dialog.module.scss';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import ImageSuccess from '@/assets/svg/icon-success.svg';
import ImageInfo from '@/assets/svg/icon-info.svg';
import ImageDanger from '@/assets/svg/icon-danger.svg';
import { Button } from '@/components/Button';

type DialogVariant = 'success' | 'info' | 'danger';

type DialogProps<V extends DialogVariant = DialogVariant> = {
  variant: V;
  isDisabled?: V extends 'success' ? never : boolean;
  onConfirm?: () => void;
  onClose?: () => void;
};

export const Dialog = <V extends DialogVariant>({
  variant,
  isDisabled,
  // onConfirm,
  // onClose,
}: DialogProps<V>) => {
  const [content, setContent] = useState({
    title: '',
    description: ''
  });

  useEffect(() => {
    if (variant === 'success') {
      setContent({
        title: 'Successfully loaded',
        description: 'Neque porro quisquam est qui dolorem ipsum'
      });
    } else if (variant === 'info') {
      setContent({
        title: 'New Information',
        description: 'Neque porro quisquam est qui dolorem ipsum'
      });
    } else if (variant === 'danger') {
      setContent({
        title: 'Are you sure you want to delete this user?',
        description: 'This action is irreversible'
      });
    }
  }, [variant]);

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

  return (
    <div className={clsx(styles.dialog)}>
      <div className={clsx(styles.dialogBody)}>
        {getSrcVariant(variant)}
        <div>
          <h3 className={clsx(styles.title)}>{content.title}</h3>
          <p className={clsx(styles.description)}>{content.description}</p>
        </div>
      </div>
      <div className={clsx(styles.dialogFooter)}>
        <Button color='secondary' disabled={isDisabled}>
          { variant === 'success' ? 'OK' : 'Cancel' }
        </Button>
        {
          variant === 'info' &&
          <Button color='primary' disabled={isDisabled}>Create</Button>
        }
        {
          variant === 'danger' &&
          <Button color='danger' disabled={isDisabled}>Delete</Button>
        }
      </div>
    </div>
  )
}