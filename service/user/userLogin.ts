'use server';

import {cookies} from "next/headers";
import {type ResponseCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {validateEmail, validateNickname, validatePassword} from "@/utils/formValidation";
import getTokenAndOptionsFromCookie from "@/utils/getTokenAndOptionsFromCookie";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;


export default async function userLogin(prevState: any, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // usernameOrEmail validation
    const validateNicknameMessage = email.includes('@')
        ? validateEmail(email)
        : validateNickname(email);
    if (validateNicknameMessage !== '') return {name: 'email', message: validateNicknameMessage};

    // userPassword validation
    const validatePasswordMessage = validatePassword(password)
    if (validatePasswordMessage !== '') return {name: 'password', message: validatePasswordMessage};

    const res = await fetch(`${backendURL}/api/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password}),
        credentials: 'include'
    });

    if (res.ok) {
        const cookieList = res.headers.getSetCookie();

        const accessTokenStr = cookieList.find(v => v.includes('access_token'));
        const refreshTokenStr = cookieList.find(v => v.includes('refresh_token'));
        if ((accessTokenStr != null) && (refreshTokenStr != null)) {
            const {
                token: accessToken,
                options: accessTokenOption
            } = getTokenAndOptionsFromCookie(accessTokenStr, 'access_token');
            const {
                token: refreshToken,
                options: refreshTokenOption
            } = getTokenAndOptionsFromCookie(refreshTokenStr, 'refresh_token');

            const cookieStore = cookies();
            if (accessToken != null && refreshToken != null) {
                // 쿠키에 액세스토큰, 리프레쉬 토큰 저장
                cookieStore.set("access_token", accessToken, accessTokenOption as Partial<ResponseCookie>);
                cookieStore.set("refresh_token", refreshToken, refreshTokenOption as Partial<ResponseCookie>);
            }

            // 쿠키에 사용자 아이디 저장
            cookieStore.set("loginUserId", email);
        }

        return {result: 'success', message: '로그인을 완료했습니다.'};
    }

    const data = await res.json();
    return {result: 'fail', name: '', message: data.errorMessage};
};


