import styles from './Card.module.css';
import { calculator } from '../../common/utils/utils';

const Card = (props) => {
    const {symbol, multiplier, key} = props.values

    const onClickHandler = (e) => {
        props.setValue(calculator[symbol](Number(props.value), Number(multiplier)))
    }

    const onDeleteHandler = () => {
        props.removeCardHandler(key)
    }

    return <div className={styles.card}>
        <div className={styles.cardValues}>
            <p>{`${symbol} ${multiplier}`}</p>
        </div>
        <div className={styles.cardButtons}>
            <button onClick={onClickHandler} className={styles.button}>
                APPLY
            </button>
            <button onClick={onDeleteHandler} className={styles.button}>
                DELETE
            </button>
        </div>
    </div>
}

export default Card