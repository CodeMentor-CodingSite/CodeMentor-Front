import React from 'react';
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import Link from "next/link";

function SignUpPage() {


    return (
        <div className='w-fit min-h-[600px] mx-auto p-[20px] flex flex-col items-center space-y-[20px] border border-[#e8e8e8] shadow-lg'>
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
                    placeholder='닉네임'
                    errorMessage=''
                    isInvalid={false}
                    isRequired={true}
                    radius='sm'
                    variant='bordered'
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
                <Input
                    type='password'
                    placeholder='비밀번호 확인'
                    errorMessage=''
                    isInvalid={false}
                    isRequired={true}
                    radius='sm'
                    className='w-full'
                    variant='bordered'
                />
                <Input
                    type='email'
                    placeholder='이메일 주소'
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
                    회원 가입
                </Button>
            </form>
            <div className='w-full h-[70px] px-2 flex justify-center items-center space-x-4'>
                <Link href='#' className='text-[#50707D] text-md font-medium text-[#aaa]'>계정이 있으신가요?</Link>
                <Link href='#' className='text-[#50707D] text-md font-bold text-[#50707]'>로그인</Link>
            </div>
        </div>
    );
}

export default SignUpPage;