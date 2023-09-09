import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="mr blog"
                        width={50}
                        height={50}
                    />
                    <h1 className={styles.logoText}>Mr Blog</h1>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veniam tempora necessitatibus, omnis placeat, modi eligendi
                    accusantium ipsam laudantium beatae, cumque incidunt
                    exercitationem! Iste, aut reprehenderit!
                </p>
                <div className={styles.icons}>
                    <Image
                        src="/facebook.png"
                        alt="facebook"
                        width={18}
                        height={18}
                    />
                    <Image
                        src="/instagram.png"
                        alt="instagram"
                        width={18}
                        height={18}
                    />
                    <Image
                        src="/tiktok.png"
                        alt="tiktok"
                        width={18}
                        height={18}
                    />
                    <Image
                        src="/youtube.png"
                        alt="youtube"
                        width={18}
                        height={18}
                    />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/">Style</Link>
                    <Link href="/">Fashion</Link>
                    <Link href="/">Coding</Link>
                    <Link href="/">Travel</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Tiktok</Link>
                    <Link href="/">Youtube</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
