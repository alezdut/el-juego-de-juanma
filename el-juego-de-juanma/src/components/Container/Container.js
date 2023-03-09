import { useState } from 'react'
import Title from '../Title/Title'
import CardContainer from './CardContainer/CardContainer'
import styles from './Container.module.css'
import InputContainer from './InputContainer/InputContainer'
import OperationContainer from './OperationContainer/OperationContainer'

const Container = () => {
    const [symbol, setSymbol] = useState();
    const [multiplier, setMultiplier] = useState(0)
    const [value, setValue] = useState(10)
    const [cards, setCards] = useState([])


    const addCardHandler = () => {
        setCards((prevCards) => {
             return [...prevCards, {symbol: symbol, multiplier: multiplier, key: Math.random() * 10}]
        })
    }

    const removeCardHandler = (key) => {
        setCards((prevCards) => {
            return prevCards.filter(c => c.key !== key)
        })
    }

    return <div className={styles.container}>
        <Title/>
        <OperationContainer setSymbol={setSymbol}/>
        <InputContainer value={value} addCardHandler={addCardHandler} setValue={setMultiplier}/>
        <CardContainer cards={cards} value={value} setValue={setValue} removeCardHandler={removeCardHandler}/>
    </div>
}

export default Container