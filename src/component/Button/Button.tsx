// import clsx from 'clsx';
// import React, { FocusEvent, KeyboardEvent, MouseEvent, ReactNode } from 'react';
// import styles from './Button.module.scss';

// type ButtonConfirmProps = {
//   variant: 'success' | 'info' | 'danger';
//   children?: ReactNode;
//   onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
//   onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
//   onFocus?: (event: FocusEvent<HTMLButtonElement>) => void;
//   onBlur?: (event: FocusEvent<HTMLButtonElement>) => void;
//   onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void;
//   onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void;
//   disabled?: boolean;
// };

// export const ButtonConfirm: React.FC<ButtonConfirmProps> = ({
//   variant,
//   disabled,
// }) => {
//   return (
//     <>
//       <button
//         disabled={disabled}
//         className={clsx(styles.secondary, styles[variant])}
//       >
//         {variant === 'success' && <span>OK</span>}
//         {variant !== 'success' && <span>Cancel</span>}
//       </button>
//       <button
//         disabled={disabled}
//         className={clsx(styles.primary, styles[variant])}
//       >
//         {' '}
//         {variant === 'info' && <span>Create</span>}
//         {variant !== 'info' && <span>Delete</span>}
//       </button>
//     </>
//   );
// };

import clsx from 'clsx';
import React, { FocusEvent, KeyboardEvent, MouseEvent, ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'danger';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
  onFocus?: (event: FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: FocusEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { color = 'primary', children, ...remainingProps } = props;

  return (
    <button
      className={clsx(styles.button, {
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary',
        [styles.danger]: color === 'danger',
      })}
      {...remainingProps}
    >
      {children}
    </button>
  );
};
