import { getReviewsByBookId } from '@/app/lib/actions/reviews/actions';
import ReviewRepository from '@/app/lib/repositories/api-review-repository';
import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


async function checkSession() {
    const session = await auth();
    if (!session?.user?.email) {
        return null;
    }
    return session.user.email;
}

async function validateReviewRequest(request: NextRequest) {
    const body = await request.json();
    if (!body.review) {
        return { error: 'Review content is required', status: 400 };
    }
    if (!body.name) {
        return { error: 'Review author name is required', status: 400 };
    }
    if (!body.bookId) {
        return { error: 'Review bookId is required', status: 400 };
    }
    return { body };
}


export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const bookId = searchParams.get('id');
    if (!bookId) {
        return NextResponse.json({ error: 'Book ID is required' }, { status: 400 });
    }
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const id = parseInt(bookId, 10);
    try {
        const reviews = await getReviewsByBookId(id, page, limit);
        return NextResponse.json(reviews);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    const email = await checkSession();
    if (!email) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { searchParams } = new URL(request.url);
    const reviewId = searchParams.get('id');
    if (!reviewId) {
        return NextResponse.json({ error: 'Review ID is required' }, { status: 400 });
    }
    const id = parseInt(reviewId, 10);
    const repo = new ReviewRepository()
    const review = await repo.getReviewToEdit(id);
    if (email !== review.owner) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    try {
        await repo.deleteReview(id);
        return NextResponse.json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    const email = await checkSession();
    if (!email) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { error, status, body } = await validateReviewRequest(request);
    if (error) {
        return NextResponse.json({ error }, { status });
    }
    const repo = new ReviewRepository();
    try {
        const rev = await repo.addReview({ id: 0, owner: email, ...body });
        return NextResponse.json({ message: `Review ${rev.id} added successfully` });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    const email = await checkSession();
    if (!email) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { error, status, body } = await validateReviewRequest(request);
    if (error) {
        return NextResponse.json({ error }, { status });
    }
    if (!body.id) {
        return NextResponse.json({ error: 'Review id is required', status: 400 });
    }
    const repo = new ReviewRepository()
    const review = await repo.getReviewToEdit(body.id);
    if (email !== review.owner) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    review.review = body.review;
    try {
        await repo.updateReview(review);
        return NextResponse.json({ message: 'Review updated successfully' });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }

}