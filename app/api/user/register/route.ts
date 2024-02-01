import {type NextRequest, NextResponse} from "next/server";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function POST(request: NextRequest) {
    const signUpFormData = await request.json();

    const res = await fetch(`${backendURL}/api/user/register`,
        {method: 'POST', body: JSON.stringify(signUpFormData), headers: {'Content-Type': 'application/json'}}
    );

    const data =  await res.json();
    return NextResponse.json(data);
}