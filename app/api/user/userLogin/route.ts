import {type NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import getRefreshToken from "@/service/getRefreshToken";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
export default async function POST(req: NextRequest) {
    const loginRequest = await req.json();

    const res = await fetch(`${backendURL}/api/user/userLogin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginRequest),
        credentials: 'include'
    });

    if (res.ok) {
        const {headers} = res;
        const accessToken = headers.get('Authorization');
        const setCookieHeader = headers.get("Set-Cookie");

        if ((accessToken != null) && (setCookieHeader != null)) {
            const {token, options} = getRefreshToken(setCookieHeader);

            const cookieStore = cookies();
            cookieStore.set("Access", accessToken);
            cookieStore.set("Refresh", token, options);
        }
    }

    const data = await res.json();
    return NextResponse.json(data);

}