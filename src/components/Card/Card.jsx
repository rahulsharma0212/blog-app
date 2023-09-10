import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = ({ post }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" fill alt="" />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>{post.title}</h1>
                </Link>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    voluptatibus, eius mollitia doloribus tenetur maiores
                    blanditiis numquam harum consectetur maxime exercitationem
                    expedita, quia delectus a.
                </p>
                <Link className={styles.link} href="/">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Card;
