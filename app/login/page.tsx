import React from 'react';
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import Link from "next/link";

function LoginPage() {
    return (
            <div className='w-fit min-h-[460px] mx-auto p-[20px] flex flex-col items-center space-y-[20px] border border-[#e8e8e8] shadow-lg'>
                <h1
                    className='min-w-[333px] mt-[50px] mb-[30px] text-3xl text-center font-bold text-[#f5a524]'
                >
                    Code Mentor
                </h1>
                <form
                    action=""
                    className='min-w-[340px] flex flex-col space-y-[20px]'
                >
                    <Input
                        type='text'
                        placeholder='닉네임 혹은 이메일'
                        errorMessage=''
                        isInvalid={false}
                        isRequired={true}
                        radius='sm'
                        variant='bordered'
                        className='w-full'
                    />
                    <Input
                        type='password'
                        placeholder='비밀번호'
                        errorMessage=''
                        isInvalid={false}
                        isRequired={true}
                        radius='sm'
                        className='w-full'
                        variant='bordered'
                    />
                    <Button
                        size='lg'
                        radius='sm'
                        className='bg-[#486471] text-xl text-white'
                    >
                        로그인
                    </Button>
                </form>
                <div className='w-full flex items-center px-2'>
                    <Link href='#' className='mr-auto text-[#50707D] text-sm'>비밀번호 찾기</Link>
                    <Link href='#' className='ml-auto text-[#50707D] text-sm'>회원가입</Link>
                </div>
            </div>
    );
}

export default LoginPage;