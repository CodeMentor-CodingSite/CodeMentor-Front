import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// todo : 백엔드 서버로 가는 요청 가로채서 토큰 세팅
export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ['/api/user/:userBoard*','/api/user/:userInfo*']
}