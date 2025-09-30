import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import * as css from './Button.module.scss';

export enum ButtonVariant {
  PRIMARY = 'primary',
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, variant, ...otherProps } = props;

  return (
    <button
      className={classNames(css.button, {}, [className, css[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
