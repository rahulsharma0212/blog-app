import Menu from '@/components/menu/Menu';
import styles from './singlePage.module.css';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image
                                className={styles.avatar}
                                src="/p1.jpeg"
                                alt=""
                                fill
                            />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>vikal kumar</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.image}
                        src="/p1.jpeg"
                        alt=""
                        fill
                    />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Reprehenderit, deleniti assumenda quidem
                            exercitationem optio expedita facilis sint neque
                            sapiente eius.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Error, fugit minima. Voluptatem similique
                            magni necessitatibus saepe ducimus, veritatis
                            provident accusantium, harum, dolores tempora in!
                            Facilis deserunt maxime deleniti quos alias
                            praesentium nam. Ea, quia nesciunt!
                        </p>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ipsam aliquid quam laudantium similique, id
                            quasi magni. Ipsa ut autem totam magni iste dolores
                            obcaecati minima mollitia dolorum quaerat voluptates
                            quo ab commodi amet a enim veritatis earum
                            repellendus, nulla cumque sequi in! Maxime,
                            reprehenderit assumenda!
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default SinglePage;
