import React from 'react';
import Image from "next/image";
import Link from "next/link";
import defaultAvatar from '../../../public/defaultAvatar.png';

function UserProfile() {
  return (
      <div className='w-full flex flex-col'>
        <div className='flex mb-2'>
          <div className='relative' style={{width: '80px', height: '80px'}}>
            <Image src={defaultAvatar} alt='사용자 이미지' fill/>
          </div>
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
