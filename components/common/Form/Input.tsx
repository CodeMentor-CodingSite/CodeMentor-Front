'use client';

import type {InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorMessage?: string;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function Input({id, label = '', disabled = false, errorMessage = '', ...props}: InputProps) {
    return (
        <div className={classNames(disabled ? 'opacity-50 pointer-events-none' : '', 'relative mobile:text-sm')}>
            {
                (label !== "") && (
                    <label htmlFor={id} className="text-gray-700">
                        {label}
                    </label>
                )
            }
            <input
                id={id}
                type="text"
                className="flex-1 w-full py-4 px-4 rounded-sm border-1 appearance-none border border-gray-300 dark:bg-gray-600 text-gray-700 placeholder-gray-600 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                {...props}
            />
            {
                errorMessage !== '' &&
                <p className='text-md text-red-500'>{errorMessage}</p>
            }
        </div>
    );
}

export default Input;