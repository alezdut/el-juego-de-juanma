import { useEffect, useState } from 'react';
import styles from './Operation.module.css';

const Operation = (props) => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(props.selected)
    }, [props.selected])

    return <div onClick={props.onClickHandler} className={selected ? styles.operationSelected : styles.operation} >
        <p>{props.symbol}</p>
    </div>
}

export default Operation