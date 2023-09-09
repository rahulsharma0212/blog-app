import Pagination from '../pagination/Pagination';
import styles from './cardList.module.css';
import Card from '../Card/Card';

const CardList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Poster</h1>
            <div className={styles.posts}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Pagination />
        </div>
    );
};

export default CardList;
