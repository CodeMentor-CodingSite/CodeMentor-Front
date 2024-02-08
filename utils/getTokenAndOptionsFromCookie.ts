const getTokenAndOptionsFromCookie = (cookieStr: string, tokenName: string) => {
    const cookieStrArr = cookieStr.trim().split(";");
    const token = cookieStrArr.find(v => v.includes(tokenName))?.split("=")[1];
    const options = cookieStrArr.filter(v => !v.includes(tokenName));

    const option: Record<string, string> = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const item of options) {
        const strArr = item.split("=");
        const key = strArr[0];
        const value = strArr[1];
        option[key] = value;
    }

    return {token, options};
}

export default getTokenAndOptionsFromCookie;
