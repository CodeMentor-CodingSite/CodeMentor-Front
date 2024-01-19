import React from 'react';
import {Progress} from "@nextui-org/react";
import capitalizeFirstChar from "@/utils/capitalizeFirstChar";

function SolvedProgressBar({level, count, total}: { level: string, count: number, total: number }) {
    let barColor = '';
    let barBgColor = '';

    switch(level){
        case 'easy':
            barColor = '!bg-[#09BBA1] dark:!bg-[#01B39A]';
            barBgColor = '!bg-[#D9F6E7] dark:!bg-[#12472B]';
            break;
        case 'medium':
            barColor = '!bg-[#FFC008] !dark:bg-[#FFB801]';
            barBgColor = '!bg-[#FFF4D9] dark:!bg-[#6B5419]';
            break;
        case 'hard':
            barColor = '!bg-[#FE0833] dark:!bg-[#FE012B]';
            barBgColor = '!bg-[#FFD9DF] dark:!bg-[#570015]';
            break;
        default:
            throw Error('Unknown problem level');
    }

    const progressValue = parseInt(((count / total) * 100).toFixed(1), 10);

    return (
        <div className='w-[300px] px-2 pt-2 flex flex-col space-y-1 hover:bg-gray-100/70 dark:hover:bg-backgroundDark/85 cursor-pointer rounded-md'>
            <div className='flex items-center space-x-4'>
                <div className='mr-auto basis-[90px] text-[#8B898D] dark:text-gray-400 font-semibold'>
                    {capitalizeFirstChar(level)}
                </div>
                <div>
                    <span className='mr-2 font-semibold dark:text-gray-300/80'>{count}</span>
                    <span className='text-[12px] text-[#C4C4C7] dark:text-gray-400/80 font-medium'>&#47;{total}</span>
                </div>
                <div className='text-[#C4C4C6] dark:text-gray-400/50'>
                    {
                        progressValue > 0 ?
                            `${progressValue}%` : 'Not enough data'
                    }
                </div>
            </div>
            <div>
                <Progress
                    classNames={{
                        indicator:barColor,
                        track:barBgColor
                }}
                    value={progressValue}
                />
            </div>
        </div>
    );
}

export default SolvedProgressBar;