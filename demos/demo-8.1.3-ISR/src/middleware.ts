import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {

    const { pathname } = request.nextUrl;
    if (pathname.startsWith('/api')) {
        const apiKey = request.headers.get('x-api-key');
        if (!apiKey || apiKey !== process.env.API_SECRET_KEY) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        return NextResponse.next();
    }

    const session = await auth();
    if (!session?.user?.email) {
        console.log('No user email found, redirecting to home page');
        return NextResponse.rewrite(new URL('/', request.url));
    }
    console.log('User is authenticated');
    return NextResponse.next();
}

export const config = {
    matcher: ['/books/create', '/books/mine', '/reviews/mine', '/api/reviews'],
}

