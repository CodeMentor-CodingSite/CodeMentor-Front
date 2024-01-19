import React from 'react';

function Badge({title}:{title:string}) {
    return (
        <div
            className='px-[8px] bg-[#f2f3f4] dark:bg-transparent
                        text-[14px] leading-[24px] text-[#85858A] dark:text-gray-300/80 font-medium rounded-[9999px]'>
            {title}
        </div>
    );
}

export default Badge;