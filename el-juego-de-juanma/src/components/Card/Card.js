import styles from './Card.module.css';

const Card = (props) => {
    return <div className={styles.card}>
        <div className={styles.cardValues}>
            <p>{`${props.symbol} ${props.value}`}</p>
        </div>
        <div className={styles.cardButtons}>
            <button className={styles.button}>
                APPLY
            </button>
            <button className={styles.button}>
                DELETE
            </button>
        </div>
    </div>
}

export default Card