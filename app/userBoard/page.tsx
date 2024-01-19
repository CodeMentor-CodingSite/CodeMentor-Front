import React from 'react';
import {
  Languages,
  Skills,
  Solved,
  Submission,
  UserProfile,
} from '@/containers/userBoard';

function UserBoardPage() {
  return (
    <section className="w-full h-full flex items-center space-x-[20px]">
      <section className="min-w-[276px] px-[16px] pt-[21px] pb-[100px] rounded-md shadow-[0_0px_8px_1px_rgba(0,0,0,.18)] dark:bg-componentDark">
        <UserProfile />
        <Languages />
        <Skills />
      </section>
      <section className="w-full flex flex-col space-y-[20px]">
        <Solved />
        <Submission />
      </section>
    </section>
  );
}

export default UserBoardPage;
