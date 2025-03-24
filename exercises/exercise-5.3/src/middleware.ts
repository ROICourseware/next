import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 

export async function middleware(request: NextRequest) {
    const session = await auth();
    if (!session?.user?.email) {
        console.log('No user email found, redirecting to home page');
        return NextResponse.rewrite(new URL('/', request.url));
    }
    console.log('User is authenticated');
    return NextResponse.next();
}

export const config = {
    matcher: ['/books/create', '/books/mine'],
}

