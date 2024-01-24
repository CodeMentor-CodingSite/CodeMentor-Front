'use client';

import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function Input({
  label = '',
  disabled = false,
  errorMessage = '',
  ...props
}: InputProps) {
  return (
    <div
      className={classNames(
        disabled ? 'opacity-50 pointer-events-none' : '',
        `relative mobile:text-sm ${props.className ? props.className : ''}`
      )}
    >
      {label !== '' && (
        <label htmlFor={props.id} className="text-gray-700">
          {label}
        </label>
      )}
      <input id={props.id} type="text" {...props} className='customInput'/>
      {errorMessage !== '' && (
        <p className="text-red-500 text-md">{errorMessage}</p>
      )}
    </div>
  );
}

export default Input;
