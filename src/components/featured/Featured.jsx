import Image from 'next/image';
import styles from './featured.module.css';

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Rahul here!</b> Discover my stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.image}
                        src="/p1.jpeg"
                        alt=""
                        fill
                    />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </h1>
                    <p className={styles.postDescription}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestias corporis facilis quisquam eaque culpa
                        quam, illo eligendi sapiente nostrum. Perspiciatis
                        inventore necessitatibus omnis repudiandae voluptatum.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
