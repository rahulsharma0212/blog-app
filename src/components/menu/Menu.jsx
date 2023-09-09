import Link from 'next/link';
import styles from './menu.module.css';
import Image from 'next/image';
import MenuPost from '../menuPost/menuPost';
import MenuCategories from '../menuCategories/MenuCategories';

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"what's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <MenuPost />
            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <MenuCategories />
            <h2 className={styles.subtitle}>Choose by the editor</h2>
            <h1 className={styles.title}>Editors Pick</h1>
            <MenuPost withImage />
        </div>
    );
};

export default Menu;
