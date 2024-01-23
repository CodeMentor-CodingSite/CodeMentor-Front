import React from 'react';
import Link from "next/link";
import UserAvatar from "@/components/common/UserAvatar";

function UserProfile() {
  return (
      <div className='w-full flex flex-col'>
        <div className='flex mb-2'>
          <UserAvatar imageSrc={null}/>
          <div className='flex items-center space-x-1 mx-auto'>
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
