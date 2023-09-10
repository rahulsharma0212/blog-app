import Menu from '@/components/menu/Menu';
import styles from './singlePage.module.css';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

const getPost = async (slug) => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error("Couldn't get Posts");
    }
    const data = await res.json();
    return data;
};

const SinglePage = async ({ params }) => {
    const { slug } = params;
    const post = await getPost(slug);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{post?.title}</h1>
                    <div className={styles.user}>
                        {post?.user?.image && (
                            <div className={styles.userImageContainer}>
                                <Image
                                    className={styles.avatar}
                                    src={post.user.image}
                                    alt=""
                                    fill
                                />
                            </div>
                        )}
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>vikal kumar</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                </div>
                {post?.img && (
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src={post.img}
                            alt=""
                            fill
                        />
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div
                        className={styles.description}
                        dangerouslySetInnerHTML={{ __html: post?.desc }}
                    ></div>
                    <div className={styles.comment}>
                        <Comments postSlug={slug} />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default SinglePage;
