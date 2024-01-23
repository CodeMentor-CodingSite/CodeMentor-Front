'use client';

import React, {HTMLInputTypeAttribute} from 'react';
import {Input} from "@/components/common";

interface InfoEditorProps {
    inputType: HTMLInputTypeAttribute;
    label: string;
    value: string;
}

function InfoEditor({inputType, label, value}: InfoEditorProps) {
    return (
        <>
            <div
                className='flex items-center p-[12px] text-xl font-medium border-b border-[#ddd] dark:border-borderDark'>
                <div className='basis-[200px] text-gray-600 dark:text-[#797979]'>{label}</div>
                <div className='flex grow items-center justify-between px-[6px]'>
                    <span className='text-gray-400 dark:text-[#797979]'>{value}</span>
                    <button type='button' className='text-[#0088CC]'>Edit</button>
                </div>
            </div>
            {/* <div */}
            {/*     className='flex items- center p-[12px] text-xl font-medium border-b border-[#ddd] dark:border-borderDark'> */}
            {/*     <div className='basis-[200px] text-gray-600 dark:text-[#797979]'>ID</div> */}
            {/*     <div className='flex grow items-center justify-between px-[6px]'> */}
            {/*         <Input type={inputType} value={value}/> */}
            {/*         <div className='flex items-center space-x-2 '> */}
            {/*             <button type='button' */}
            {/*                     className='px-[10px] py-[5px] text-white bg-[#64B9F9] dark:border dark:border-white rounded-md'>Save */}
            {/*             </button> */}
            {/*             <button type='button' */}
            {/*                     className='px-[10px] py-[5px] bg-[#ECF0F1] dark:opacity-[10%] rounded-md'>Cancel */}
            {/*             </button> */}
            {/*         </div> */}
            {/*     </div> */}
            {/* </div> */}
        </>
    );
}

export default InfoEditor;