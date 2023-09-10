import Link from 'next/link';
import styles from './categoryList.module.css';
import Image from 'next/image';

const getCategories = async () => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error("Couldn't get categories");
    }
    const data = await res.json();
    return data;
};

const CategoryList = async () => {
    const categories = await getCategories();
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular categories</h1>
            <div className={styles.categories}>
                {categories.map(({ id, slug, title, img }, idx) => {
                    return (
                        <Link
                            key={id}
                            href={`/blog?cat=${slug}`}
                            className={`${styles.category} ${styles[slug]}`}
                        >
                            {img && (
                                <Image
                                    src={img}
                                    alt={slug}
                                    width={32}
                                    height={32}
                                    className={styles.image}
                                />
                            )}
                            {title}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryList;
