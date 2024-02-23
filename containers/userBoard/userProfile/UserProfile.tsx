import React from 'react';
import Link from "next/link";
import UserAvatar from "@/components/common/UserAvatar";

function UserProfile() {
  return (
      <div className='flex flex-col w-full'>
        <div className='flex mb-2'>
          <UserAvatar imageSrc={null}/>
          <div className='flex items-center mx-auto space-x-1'>
            <span>test9864</span>
          </div>
        </div>
        <Link
            href='/userProfile'
            className='py-[5px] px-[8px] bg-[#ebfaf3] dark:bg-[#151F18] text-[#0EC86B] dark:text-[#2DB55D] text-center rounded-sm'
        >
          Edit Profile
        </Link>
      </div>
  );
}

export default UserProfile;
