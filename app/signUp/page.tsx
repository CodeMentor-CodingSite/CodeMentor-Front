'use client';

import React from 'react';
import {useFormState} from 'react-dom';
import {Button} from "@nextui-org/react";
import Link from "next/link";
import {useSetRecoilState} from "recoil";
import {useRouter} from "next/navigation";
import Input from "@/components/common/Form";
import Logo from "@/components/common/Header/Logo";
import {register} from "@/service/user";
import globalSnackbarStateStore from "@/store/GlobalSnackbarStateStore";

const initialState = {
    result:'',
    name:'',
    message:''
}
function SignUpPage() {
    const router = useRouter();
    const setGlobalSnackbar = useSetRecoilState(globalSnackbarStateStore);
    const [state, formAction] = useFormState(register, initialState);

    if(state.result === 'success'){
        router.back();
        router.refresh();

        setGlobalSnackbar({show:true, type:'SUCCESS', message:state.message});
    }

    if(state.result === 'fail'){
        setGlobalSnackbar({show:true, type:'ERROR', message:state.message});
    }

    return (
        <div className='w-fit min-h-[600px] mx-auto p-[20px] flex flex-col items-center space-y-[20px]
         border border-[#e8e8e8] dark:border-[#464746] dark:bg-[#121212] shadow-lg'
        >
            <Logo className='min-w-[333px] mt-[50px] mb-[30px] text-3xl text-center'/>
            <form
                action={formAction}
                className='min-w-[340px] flex flex-col space-y-[20px]'
            >
                <div className='flex flex-col space-y-2'>
                    <Input
                        type='text'
                        name='nickname'
                        placeholder='닉네임'
                        errorMessage=''
                        className='w-full'
                        required
                    />
                    {
                        state.name === 'nickname' &&
                        <span className='pl-2 text-sm text-themeError'>{state.message}</span>
                    }
                </div>
                <div className='flex flex-col space-y-2'>
                    <Input
                        type='password'
                        name='password'
                        placeholder='비밀번호'
                        errorMessage=''
                        className='w-full'
                        required
                    />
                    {
                        state.name === 'password' &&
                        <span className='pl-2 text-sm text-themeError'>{state.message}</span>
                    }
                </div>

                <div className='flex flex-col space-y-2'>
                    <Input
                        type='password'
                        name='passwordCheck'
                        placeholder='비밀번호 확인'
                        errorMessage=''
                        className='w-full'
                        required
                    />
                    {
                        state.name === 'passwordCheck' &&
                        <span className='pl-2 text-sm text-themeError'>{state.message}</span>
                    }
                </div>
                <div className='flex flex-col space-y-2'>
                    <Input
                        type='email'
                        name='email'
                        placeholder='이메일 주소'
                        errorMessage=''
                        className='w-full'
                        required
                    />
                    {
                        state.name === 'email' &&
                        <span className='pl-2 text-sm text-themeError'>{state.message}</span>
                    }
                </div>
                <Button
                    type='submit'
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