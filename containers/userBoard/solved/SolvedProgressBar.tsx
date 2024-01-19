import React from 'react';
import capitalizeFirstChar from "@/utils/capitalizeFirstChar";

function SolvedProgressBar({level, count, total}: { level: string, count: number, total: number }) {
    let barColor = '';
    let barBgColor = '';

    switch(level){
        case 'easy':
            barColor = 'bg-[#09BBA1] dark:bg-[#01B39A]';
            barBgColor = 'bg-[#D9F6E7] dark:bg-[#0F2D1D]';
            break;
        case 'medium':
            barColor = 'bg-[#FFC008] dark:bg-[#FFB801]';
            barBgColor = 'bg-[#FFF4D9] dark:bg-[#372C10]';
            break;
        case 'hard':
            barColor = 'bg-[#FE0833] dark:bg-[#FE012B]';
            barBgColor = 'bg-[#FFD9DF] dark:bg-[#361017]';
            break;
        default:
            throw Error('Unknown problem level');
    }

    return (
        <div className='flex flex-col space-y-4'>
            <div className='flex items-center space-x-4'>
                <div className='text-[#8B898D] dark:text-gray-400 font-semibold'>{capitalizeFirstChar(level)}</div>
                <div>
                    <span className='mr-2 font-semibold dark:text-gray-300/80'>{count}</span>
                    <span className='text-[12px] text-[#C4C4C7] dark:text-gray-400/80 font-medium'>&#47;{total}</span>
                </div>
                <div className='text-[#C4C4C6] dark:text-gray-400/50'>
                    {
                        (count / total) * 100 >= 1 ?
                            `${(count / total) * 100} &#37;` : 'Not enough data'
                    }
                </div>
            </div>
            <div>
                <span className={barColor}>solved</span>
                <span className={barBgColor}>total</span>
            </div>
        </div>
    );
}

export default SolvedProgressBar;