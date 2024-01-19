import React from 'react';
import {Languages, Skills, Solved, Submission, UserProfile} from "@/containers/userBoard";

function UserBoardPage() {
    return (
        <section className='w-full h-full flex items-center space-x-[20px]'>
            <section className='flex flex-col space-y-8 w-[450px] px-[16px] pt-[21px] pb-[100px] userBoardSection'>
                <UserProfile/>
                <Languages/>
                <Skills/>
            </section>
            <section className='w-full flex flex-col space-y-[20px]'>
                <Solved/>
                <Submission/>
            </section>
        </section>
    );
}

export default UserBoardPage;