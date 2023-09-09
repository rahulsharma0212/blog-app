import Image from 'next/image';
import styles from './comments.module.css';
import Link from 'next/link';

const Comments = () => {
    const status = 'authenticated';
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === 'authenticated' ? (
                <div className={styles.write}>
                    <textarea
                        placeholder="Write a comment..."
                        className={styles.input}
                    ></textarea>
                    <div className={styles.button}>Send</div>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <div className={styles.comment} key={idx}>
                        <div className={styles.user}>
                            <Image
                                src="/p1.jpeg"
                                alt=""
                                width={50}
                                height={50}
                                className={styles.image}
                            />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>
                                    Vikal kumar
                                </span>
                                <span className={styles.date}>01.01.2023</span>
                            </div>
                        </div>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Impedit laboriosam temporibus eum eius facilis
                            veritatis debitis culpa magni, nemo consequuntur.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;
