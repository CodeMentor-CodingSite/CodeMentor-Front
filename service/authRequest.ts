"use server";

// eslint-disable-next-line import/no-extraneous-dependencies
import returnFetch from "return-fetch";
import {cookies} from "next/headers";
import {type ResponseCookie} from "next/dist/compiled/@edge-runtime/cookies";
import getTokenAndOptionsFromCookie from "@/utils/getTokenAndOptionsFromCookie";

const baseURL = process.env.NEXT_PUBLIC_BACKEND;
const authRequest = returnFetch({
    baseUrl: baseURL,
    interceptors: {
        request: async (requestArgs) => {
            const cookieStore = cookies();
            const accessToken = cookieStore.get("access_token");

            const requestArg: RequestInit | undefined = requestArgs[1];

            if ((requestArg != null) && (accessToken != null)) {
                const headers = new Headers(requestArg.headers);
                const contentType = headers.get("Content-Type");
                const args = (contentType != null)
                    ? {...headers}
                    : {"Content-Type": "application/json"};

                requestArg.headers = {
                    ...args,
                    Cookie: `access_token=${accessToken.value}`,
                };
            }

            return requestArgs;
        },
        response: async (response, requestArgs) => {
            console.log("response.status", response.status);
            if (response.status !== 401) {
                return response;
            }

            console.log("not authorized, trying to get refresh cookie..");

            const cookieStore = cookies();
            const refreshToken = cookieStore.get("refresh_token");
            if (refreshToken != null) {
                const tokenResponse = await fetch(`${baseURL}/api/user/token-reissue`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Cookie: `refresh_token=${refreshToken.value}`,
                    },
                    credentials: "include",
                });

                if (tokenResponse.ok) {
                    const {headers} = tokenResponse;

                    const cookieList = headers.getSetCookie();

                    const accessTokenStr = cookieList.find(v => v.includes('access_token'));
                    const refreshTokenStr = cookieList.find(v => v.includes('refresh_token'));
                    if ((accessTokenStr != null) && (refreshTokenStr != null)) {
                        const {
                            token: resAccessToken,
                            options: resAccessTokenOption
                        } = getTokenAndOptionsFromCookie(accessTokenStr, 'access_token');
                        const {
                            token: resRefreshToken,
                            options: resRefreshTokenOption
                        } = getTokenAndOptionsFromCookie(refreshTokenStr, 'refresh_token');

                        if (resAccessToken != null && resRefreshToken != null) {
                            // 쿠키에 액세스토큰, 리프레쉬 토큰 저장
                            cookieStore.set("access_token", resAccessToken, resAccessTokenOption as Partial<ResponseCookie>);
                            cookieStore.set("refresh_token", resRefreshToken, resRefreshTokenOption as Partial<ResponseCookie>);
                        }

                    }

                } else {
                    throw Error("failed to refresh cookie");
                }
            } else {
                throw Error("failed to get cookies");
            }

            // eslint-disable-next-line @typescript-eslint/return-await
            return await authRequest(...requestArgs);
        },
    },
});

export default authRequest;
