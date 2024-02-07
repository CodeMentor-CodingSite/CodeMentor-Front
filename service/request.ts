import {type HTTP_METHOD} from "next/dist/server/web/http";
import jsonReplaceBigInt from "@/utils/jsonReplaceBigInt";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const request = async (url: string, method: HTTP_METHOD, requestBody?: Record<string, any>) => {
    const requestInit: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (method !== 'GET' && requestBody != null) requestInit.body = jsonReplaceBigInt(requestBody);

   return fetch(`${backendURL}${url}`, requestInit);
}

export default request;