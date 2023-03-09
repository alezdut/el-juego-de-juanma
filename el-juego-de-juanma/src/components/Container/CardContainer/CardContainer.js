import Card from '../../Card/Card';
import style from './CardContainer.module.css';

const CardContainer = (props) => {
    return <div className={style.cardContainer}>{
        props.cards.map((card) => {
            return <Card values={card} setValue={props.setValue} value={props.value} key={card.key} removeCardHandler={props.removeCardHandler}/>
        })}
    </div>
}

export default CardContainer