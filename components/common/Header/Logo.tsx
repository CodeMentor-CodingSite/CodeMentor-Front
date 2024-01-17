'use client';

import React, {type HTMLAttributes} from 'react';
import {classNames} from "@/utils";


function Logo({...params}: HTMLAttributes<HTMLHeadingElement>) {

    const classNameStr = classNames(params?.className !== undefined ? params.className : '', 'text-[#f5a524] font-bold');
    const props = {...params, className: classNameStr};

    return (
        <h1
            {...props}
        >
            Code Mentor
        </h1>
    );
}

export default Logo;