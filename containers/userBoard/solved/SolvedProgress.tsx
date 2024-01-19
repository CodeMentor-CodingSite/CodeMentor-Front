import React from 'react';
import SolvedProgressBar from "@/containers/userBoard/solved/SolvedProgressBar";

export const solvedProblems = [
    {
        level: 'easy',
        count: 150,
        total: 170
    },
    {
        level: 'medium',
        count: 10,
        total: 60
    },
    {
        level: 'hard',
        count: 12,
        total: 40
    }
];

function SolvedProgress() {
    return (
        <ul className='mt-[24px] space-y-4'>
            {
                solvedProblems.map((v) => (
                    <li key={v.level}>
                        <SolvedProgressBar level={v.level} count={v.count} total={v.total}/>
                    </li>
                ))
            }
        </ul>
    );
}

export default SolvedProgress;