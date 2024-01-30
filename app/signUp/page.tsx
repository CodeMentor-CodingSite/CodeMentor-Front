import React from 'react';
import {Button} from "@nextui-org/react";
import Link from "next/link";
import Input from "@/components/common/Form";
import Logo from "@/components/common/Header/Logo";

function SignUpPage() {
  return (
      <div className='w-fit min-h-[600px] mx-auto p-[20px] flex flex-col items-center space-y-[20px]
         border border-[#e8e8e8] dark:border-[#464746] dark:bg-[#121212] shadow-lg'
      >
        <Logo className='min-w-[333px] mt-[50px] mb-[30px] text-3xl text-center'/>
        <form
            action=""
            className='min-w-[340px] flex flex-col space-y-[20px]'
        >
          <Input
              type='text'
              placeholder='닉네임'
              errorMessage=''
              className='w-full'
          />
          <Input
              type='password'
              placeholder='비밀번호'
              errorMessage=''
              className='w-full'
          />
          <Input
              type='password'
              placeholder='비밀번호 확인'
              errorMessage=''
              className='w-full'
          />
          <Input
              type='email'
              placeholder='이메일 주소'
              errorMessage=''
              className='w-full'
          />

          <Button
              size="lg"
              radius="sm"
              className="bg-[#486471] dark:bg-[#476370] text-xl text-white"
          >
            회원 가입
          </Button>
        </form>
        <div className="w-full h-[70px] px-2 flex justify-center items-center space-x-4">
        <span className="text-[#50707D] text-md font-medium text-[#aaa]">
          계정이 있으신가요?
        </span>
          <Link
              href="/login"
              className="text-[#50707D] text-md font-bold text-[#50707] dark:text-[#82A3B1]"
          >
            로그인
          </Link>
        </div>
      </div>
  );
}

export default SignUpPage;