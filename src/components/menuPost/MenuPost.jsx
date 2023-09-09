import Image from 'next/image';
import Link from 'next/link';
import styles from './menuPost.module.css';

const MenuPost = ({ withImage }) => {
    return (
        <div className={styles.items}>
            {['travel', 'fashion', 'food', 'fashion'].map((val, idx) => {
                return (
                    <Link
                        href="/"
                        key={`${val}=${idx}`}
                        className={styles.item}
                    >
                        {withImage && (
                            <div className={styles.imageContainer}>
                                <Image
                                    className={styles.image}
                                    src="/p1.jpeg"
                                    fill
                                    alt={val}
                                />
                            </div>
                        )}
                        <div className={styles.textContainer}>
                            <span
                                className={`${styles.category} ${styles[val]}`}
                            >
                                {val}
                            </span>
                            <h3 className={styles.postTitle}>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </h3>
                            <div className={styles.detail}>
                                <span className={styles.userName}>
                                    Vikal kumar
                                </span>
                                <span className={styles.date}>
                                    {' '}
                                    - 12.05.2023
                                </span>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default MenuPost;
