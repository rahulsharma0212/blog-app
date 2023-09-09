import Link from 'next/link';
import styles from './menuCategories.module.css';

const MenuCategories = () => {
    return (
        <div className={styles.categoryList}>
            {['style', 'fashion', 'food', 'travel', 'culture', 'coding'].map(
                (val, idx) => {
                    return (
                        <Link
                            key={`${val}-${idx}`}
                            href={`/blog?cat=${val}`}
                            className={`${styles.categoryItem} ${styles[val]}`}
                        >
                            {val}
                        </Link>
                    );
                },
            )}
        </div>
    );
};

export default MenuCategories;
