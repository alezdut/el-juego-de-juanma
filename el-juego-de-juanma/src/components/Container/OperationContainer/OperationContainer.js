import { useEffect, useState } from 'react';
import Operation from '../../Operation/Operation';
import styles from './OperationContainer.module.css';

const OperationContainer = (props) => {
    const operations = ['X', '%', '-', '+']
    const [state, setState] = useState(operations[Math.floor(Math.random() * 4)])

    useEffect(() => {
        props.setSymbol(state)
    },[])

    const onClickHandler = (e) => {
        e.preventDefault(e);
        setState(e.target.innerText)
        props.setSymbol(e.target.innerText)
    }

    return (<div className={styles.operationContainer}>
        {operations.map((e, index) => {
            return  <Operation symbol={e} key={index} selected={e === state ? true : false} value={index} onClickHandler={onClickHandler}></Operation>
        })}
    </div>)
}

export default OperationContainer;