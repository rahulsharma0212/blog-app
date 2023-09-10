import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = ({ post }) => {
    return (
        <div className={styles.container}>
            {post.img && (
                <div className={styles.imageContainer}>
                    <Image src={post.img} fill alt="" />
                </div>
            )}
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>
                        {post.createdAt.substring(0, 10)} -{' '}
                    </span>
                    <span className={styles.category}>{post.catSlug}</span>
                </div>
                <Link href={`/posts/${post.slug}`}>
                    <h1>{post.title}</h1>
                </Link>
                <p className={styles.desc}>{post?.desc.substring(0, 60)}</p>
                <Link className={styles.link} href={`/posts/${post.slug}`}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Card;
