'use client';

import React from 'react';
import Image from "next/image";
import defaultAvatar from "@/public/defaultAvatar.png";

function UserAvatar({imageSrc}:{imageSrc:string | null}) {
    return (
        <div className='relative w-[140px] h-[140px] rounded-[21px] border-4 border-gray-100'>
            <Image src={imageSrc ?? defaultAvatar} alt='사용자 이미지'/>
        </div>
    );
}

export default UserAvatar;