import React from 'react';
import SolvedProgressBar from "@/containers/userBoard/solved/SolvedProgressBar";

const solvedProblems = [
    {
        level: 'easy',
        count: 2,
        total: 1700
    },
    {
        level: 'medium',
        count: 1,
        total: 600
    },
    {
        level: 'hard',
        count: 1,
        total: 400
    }
];

function SolvedProgress() {
    return (
        <ul className='mt-[24px]'>
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