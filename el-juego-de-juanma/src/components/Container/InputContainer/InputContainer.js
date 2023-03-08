import { useState } from 'react';
import styles from './InputContainer.module.css';

const InputContainer = (props) => {

    const onChangeHandler = (e) => {
        props.setValue(e.target.value)
    }

    return <div className={styles.inputContainer}>
        <div className={styles.containerInput}>
            <input className={styles.input} type='number' onChange={onChangeHandler}/>
            <button className={styles.button} onClick={props.addCardHandler}>ADD</button>
        </div>
        <div className={styles.contaierValue}>
            <p className={styles.value}>{props.value}</p>
        </div>
    </div>
}

export default InputContainer