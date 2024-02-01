import {type HTTP_METHOD} from "next/dist/server/web/http";
import jsonReplaceBigInt from "@/utils/jsonReplaceBigInt";

const publicURL = process.env.NEXT_PUBLIC_URL;
const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const routeRequest = async (url: string, method: HTTP_METHOD, requestBody?: Record<string, any>) => {
    const requestInit: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (method !== 'GET' && requestBody != null) requestInit.body = jsonReplaceBigInt(requestBody);

    const res = await fetch(`${publicURL}${url}`, requestInit);
    return res.json();
}

export const request = async (url: string, method: HTTP_METHOD, requestBody?: Record<string, any>) => {
    const requestInit: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (method !== 'GET' && requestBody != null) requestInit.body = jsonReplaceBigInt(requestBody);

    const res = await fetch(`${backendURL}${url}`, requestInit);
    return res.json();
}