import React from 'react';
import SolvedStatusPie from "@/containers/userBoard/solved/SolvedStatusPie";
import SolvedProgress from "@/containers/userBoard/solved/SolvedProgress";
import SolvedProblemTable from "@/containers/userBoard/solved/SolvedProblemTable";

function Solved() {
    return (
        <section className='userBoardSection pt-[16px] pb-[12px]'>
            <h2 className='font-semibold text-[18px] px-[13px]'>해결한 문제</h2>
            <section className='flex items-stretch px-[32px] space-x-[20px]'>
                <SolvedStatusPie/>
                <SolvedProgress/>
                <SolvedProblemTable/>
            </section>
        </section>
    );
}

export default Solved;