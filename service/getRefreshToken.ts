import camelCase from "next/dist/build/webpack/loaders/css-loader/src/camelcase";

export default function getRefreshToken(setCookieHeader: string) {
    let refreshTokenValue = "";
    let cookieOptions = {};
    setCookieHeader.split(";").map((item) => {
        const cookieItem = item.trim().split("=");
        if (cookieItem.includes("Refresh")) {
            // eslint-disable-next-line prefer-destructuring
            refreshTokenValue = cookieItem[1];
        } else {
            const optionName = camelCase(cookieItem[0]);
            const optionValue = cookieItem[1] ?? true;
            cookieOptions = {
                ...cookieOptions,
                [optionName]: optionValue,
            };
        }
    });

    return { token: refreshTokenValue, options: cookieOptions };
}