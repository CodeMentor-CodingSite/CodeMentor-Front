'use server';

import {validateEmail, validateNickname, validatePasswordWithCheck} from "@/utils/formValidation";
import {request} from "@/service/user/index";


/**
 * 회원가입
 * @param prevState
 * @param formData
 */
export default async function register(prevState: any, formData: FormData) {
    const nickname = formData.get('nickname') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const passwordCheck = formData.get('passwordCheck') as string;

    const nickNameValidationMsg = validateNickname(nickname);
    if (nickNameValidationMsg !== '') {
        return {
            name: 'nickname',
            message: nickNameValidationMsg
        }
    }

    const emailValidationMsg = validateEmail(email);
    if (emailValidationMsg !== '') {
        return {
            name: 'email',
            message: emailValidationMsg
        }
    }

    const passwordValidationMsg = validatePasswordWithCheck(password, passwordCheck);

    if (passwordValidationMsg !== '') {
        return {
            name: passwordValidationMsg.includes('확인') ? 'passwordCheck' : 'password',
            message: passwordValidationMsg
        }
    }

    const response = await request('/api/user/register', 'POST', {nickname, email, password});
    const data = await response.json();
    console.log("in user, data: ",data);
    return data;
}