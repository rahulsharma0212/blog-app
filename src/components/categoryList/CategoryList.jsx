import Link from 'next/link';
import styles from './categoryList.module.css';
import Image from 'next/image';

const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular categories</h1>
            <div className={styles.categories}>
                {[
                    'style',
                    'fashion',
                    'food',
                    'travel',
                    'culture',
                    'coding',
                ].map((val, idx) => {
                    return (
                        <Link
                            key={`${val}-${idx}`}
                            href={`/blog?cat=${val}`}
                            className={`${styles.category} ${styles[val]}`}
                        >
                            <Image
                                src={`/${val}.png`}
                                alt={val}
                                width={32}
                                height={32}
                                className={styles.image}
                            />
                            {val}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryList;
