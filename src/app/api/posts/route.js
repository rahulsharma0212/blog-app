import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get('page'));
    const cat = searchParams.get('cat');

    const POSTS_PER_PAGE = parseInt(process.env.POSTS_PER_PAGE) || 2;

    const query = {
        take: POSTS_PER_PAGE,
        skip: (page - 1) * POSTS_PER_PAGE,
        where: {
            ...(cat && { catSlug: cat }),
        },
    };

    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({
                where: {
                    ...query.where,
                },
            }),
        ]);

        const hasPrev = POSTS_PER_PAGE * (page - 1) > 0;
        const hasNext = POSTS_PER_PAGE * page < count;

        return new NextResponse(
            JSON.stringify({ posts, hasPrev, hasNext }, { status: 200 }),
        );
    } catch (err) {
        return new NextResponse(
            JSON.stringify(
                { message: 'Something went wrong!', error: err },
                { status: 500 },
            ),
        );
    }
};
