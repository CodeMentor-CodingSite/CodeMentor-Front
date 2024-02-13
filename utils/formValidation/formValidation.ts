/**
 * 이메일 형식 validation
 * @param email
 */
export const validateEmail = (email:string) => {
    if(email === '') return '이메일을 입력해주세요';

    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) return '올바른 이메일 형식이 아닙니다';

    return '';
}

/**
 * 닉네임 형식 validation (6-12 자리 영문 + 숫자)
 * @param nickname
 */
export const validateNickname = (nickname: string) => {
    if(nickname === '') return '닉네임을 입력해주세요';

    const nicknameRegex: RegExp = /^[a-zA-Z0-9]{6,12}$/;
    if(!nicknameRegex.test(nickname)) return '닉네임은 영문,숫자를 포함한 6~12 자리만 가능합니다';

    return '';
}

export const isValidPassword = (password: string) => {
    const passwordRegex: RegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,12}$/
    return passwordRegex.test(password);
}

/**
 * 비밀번호, 비밀번호 확인 형식 validation (8-12 자리 특수문자 + 영문 + 숫자)
 * @param password
 */
export const validatePasswordWithCheck = (password:string, passwordCheck:string) => {
    if(password === '') return '비밀번호를 입력해 주세요.';
    if(passwordCheck === '') return '비밀번호 확인을 입력해 주세요.';

    if(password !== passwordCheck) return '비밀번호와 비밀번호 확인이 일치하지 않습니다.';

    if(!isValidPassword(password)) return '비밀번호는 영문,숫자,특수기호를 포함한 8~12자리만 가능합니다.';


    return '';
}

/**
 * 비밀번호 형식 validation
 * @param password
 */
export const validatePassword = (password:string) => {
    if(password === '') return '비밀번호를 입력해 주세요.';
    if(!isValidPassword(password)) return '비밀번호는 영문,숫자,특수기호를 포함한 8~12자리만 가능합니다.';

    return '';
}