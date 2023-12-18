import { ReactNode } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: ReactNode;
}

const Button = ({ type, children }: ButtonProps) => {
  return (
    <button type={type} className={styles['button']}>
      {children}
    </button>
  );
};

export default Button;
