'use server';

import { validateEmail, validateNickname, validatePassword} from "@/utils/formValidation";
import {request} from "@/service/user/index";

export default async function userLogin(prevState: any, formData: FormData) {
    const usernameOrEmail = formData.get('usernameOrEmail') as string;
    const userPassword = formData.get('userPassword') as string;

    // usernameOrEmail validation
    const validateNicknameMessage = usernameOrEmail.includes('@')
        ? validateEmail(usernameOrEmail)
        : validateNickname(usernameOrEmail);
    if (validateNicknameMessage !== '') return {name: 'usernameOrEmail', message: validateNicknameMessage};

    // userPassword validation
    const validatePasswordMessage = validatePassword(userPassword)
    if (validatePasswordMessage !== '') return {name: 'userPassword', message: validatePasswordMessage};

    const res = await request('/api/user/userLogin','POST', {usernameOrEmail, userPassword});
    const data = await res.json();

    return data;
};