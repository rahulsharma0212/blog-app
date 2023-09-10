import Pagination from '../pagination/Pagination';
import styles from './cardList.module.css';
import Card from '../Card/Card';

const getPosts = async (page, cat) => {
    const res = await fetch(
        `${process.env.NEXTAUTH_URL}/api/posts?page=${page}&cat=${cat || ''}`,
        {
            cache: 'no-store',
        },
    );

    if (!res.ok) {
        throw new Error("Couldn't get Posts");
    }
    const data = await res.json();
    return data;
};

const CardList = async ({ page, cat }) => {
    const { posts, hasPrev, hasNext } = await getPosts(page, cat);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                {posts?.map((post) => {
                    return <Card key={post.id} post={post} />;
                })}
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
    );
};

export default CardList;
