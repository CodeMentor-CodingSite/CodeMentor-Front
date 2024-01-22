import React from 'react';
import {CircularProgress} from "@nextui-org/react";
import {solvedProblems} from "@/containers/userBoard/solved/SolvedProgress";

function SolvedStatusPie() {
    const solvedTotalCount = solvedProblems.map(v => v.count).reduce((a, b) => a + b);
    const totalCount = solvedProblems.map(v => v.total).reduce((a, b) => a + b);
    const solvedPercentage = parseInt(((solvedTotalCount / totalCount) * 100).toFixed(1), 10);

    const valueLabel = solvedPercentage > 0 ?
        (
            <span className='flex flex-col items-center text-lg'>
                <p className='font-semibold'>{solvedPercentage}</p>
                <p className='text-gray-400'>Solved</p>
            </span>
        )
        : 'Not enough data';

    return (
        <div className='w-[100px] h-[100px] mt-[24px] mr-[4px]'>
            <CircularProgress
                classNames={{
                    svg: 'w-full h-full',
                    value: 'flex items-center flex-wrap text-xl'
                }}
                aria-label='solved problems percent'
                value={solvedPercentage}
                valueLabel={valueLabel}
                color='warning'
                strokeWidth={1}
                showValueLabel={true}
            />
        </div>
    );
}

export default SolvedStatusPie;