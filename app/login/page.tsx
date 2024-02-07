'use client';

import React from 'react';
import {useFormState} from "react-dom";
import {Button} from "@nextui-org/react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useSetRecoilState} from "recoil";
import Input from "@/components/common/Form";
import Logo from "@/components/common/Header/Logo";
import {userLogin} from "@/service/user";
import globalSnackbarStateStore from "@/store/GlobalSnackbarStateStore";
import {type FormActionState} from "@/utils/type";

const initialState: FormActionState = {
    result: '',
    message: '',
    name: ''
};


function LoginPage() {
    const router = useRouter();
    const setGlobalSnackbar = useSetRecoilState(globalSnackbarStateStore);
    const [state, formAction] = useFormState(userLogin, initialState);

    if (state.result === 'success') {
        router.back();
        router.refresh();

        setGlobalSnackbar({show: true, type: 'SUCCESS', message: state.message, duration:4000});
        state.result = '';
        state.name = '';
        state.message = '';
    }

    if (state.result === 'fail') {
        setGlobalSnackbar({show: true, type: 'ERROR', message: state.message, duration: 4000});
        state.result = '';
        state.name = '';
        state.message = '';
    }


    return (
        <div className='w-fit min-h-[460px] mx-auto p-[20px] flex flex-col items-center space-y-[20px]
                            border border-[#e8e8e8] dark:border-[#464746] dark:bg-[#121212] shadow-lg'
        >
            <Logo className='min-w-[333px] mt-[50px] mb-[30px] text-3xl text-center'/>
            <form
                action={formAction}
                className='min-w-[340px] flex flex-col space-y-[20px]'
            >
                <div className='flex flex-col space-y-2'>

                    <Input
                        type='email'
                        name='email'
                        placeholder='닉네임 혹은 이메일'
                        errorMessage=''
                        className='w-full customInput'
                    />
                    {
                        state.name === 'email' &&
                        <span className='pl-2 text-sm text-themeError'>{state.message}</span>
                    }
                </div>
                <div className='flex flex-col space-y-2'>
                    <Input
                        type='password'
                        name='password'
                        placeholder='비밀번호'
                        errorMessage=''
                        className='w-full customInput'
                    />
                    {
                        state.name === 'password' &&
                        <span className='pl-2 text-sm text-themeError'>{state.message}</span>
                    }
                </div>
                <Button
                    type='submit'
                    size='lg'
                    radius='sm'
                    className='bg-[#486471] dark:bg-[#476370] text-xl text-white'
                >
                    로그인
                </Button>
            </form>
            <div className='flex items-center w-full px-2'>
                <Link href='/findPwd' className='mr-auto text-[#50707D] dark:text-[#82A3B1] text-sm'>비밀번호 찾기</Link>
                <Link href='/signUp' className='ml-auto text-[#50707D] dark:text-[#82A3B1] text-sm'>회원가입</Link>
            </div>
        </div>
    );
}

export default LoginPage;