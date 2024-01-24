'use client';

import React from 'react';
import UserAvatar from "@/components/common/UserAvatar";
import Link from "next/link";
import {IconBackToUserBoard} from "@/public/svgs";
import EditProfileImageButton from "@/containers/editUserProfile/EditProfileImageButton";
import InfoEditor from "@/containers/editUserProfile/InfoEditor";

function EditUserProfile(
    {
        data: {
            userId, imgSrc, email
        }
    }: {
        data: {
            userId: string; email: string; imgSrc: string | null
        }
    }) {
    return (
        <>
            <section
                className='w-full pt-[65px] pb-[125px] px-[15px] flex items-center bg-slate-200 dark:bg-backgroundDark'>
                <div className='w-[285px] flex flex-col space-y-[10px] items-center'>
                    <UserAvatar imageSrc={imgSrc}/>
                    <EditProfileImageButton/>
                </div>
                <div className='flex items-center space-x-2 min-w-[160px] px-[20px]'>
                    <span className='text-[24px] text-gray-600 dark:text-white font-medium'>{userId}</span>
                    <Link href='/userBoard'>
                        <IconBackToUserBoard/>
                    </Link>
                </div>
            </section>
            <section className='-translate-y-[80px] flex flex-col space-y-6 max-w-[855px] mx-auto px-[32px] pt-[32px] pb-[52px]
             shadow-[0_0px_8px_1px_rgba(0,0,0,.18)] rounded-[8px] bg-white dark:bg-[#121212]'>
                <h1 className='px-[5px] text-2xl font-medium dark:text-[#797979]'>계정 정보</h1>
                <InfoEditor label='ID' value={userId} inputType='text'/>
                <InfoEditor label='Email' value={email} inputType='email'/>
                <InfoEditor label='Password' value='비밀번호를 변경하려면 Edit 버튼을 클릭하세요' inputType='password'/>
            </section>
        </>
    );
}

export default EditUserProfile;