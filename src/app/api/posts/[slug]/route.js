import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

//GET single Post
export const GET = async (req, { params }) => {
    const { slug } = params;
    try {
        const post = await prisma.post.findUnique({
            where: { slug },
            include: { user: true },
        });
        console.log('🚀 ~ file: route.js:12 ~ GET ~ post:', post);
        return new NextResponse(JSON.stringify(post, { status: 200 }));
    } catch (err) {
        return new NextResponse(
            JSON.stringify(
                { message: 'Something went wrong!', error: err },
                { status: 500 },
            ),
        );
    }
};
