import { useState } from 'react';
import styles from './Title.module.css';

const Title = () => {
    const [state, setState] = useState('#0000FF')
    const regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

    const onChangeHandler = (e) => {
        if (regex.test(e.target.value)) {
            setState(e.target.value);
        }
    }
    return <div className={styles.titleContainer}>
        <form className={styles.form}>
            <input type="text" name="name" onChange={onChangeHandler} className={styles.input} />
        </form>
        <p className={styles.titleText} style={{ color: `${state}` }}>EL JUEGO DE JUANMA</p>
    </div>
}

export default Title