import Card from '../../Card/Card';
import style from './CardContainer.module.css';

const CardContainer = (props) => {
    return <div className={style.cardContainer}>{
        props.cards.map((e, index) => {
            return <Card symbol={e.symbol} value={e.value} key={index}/>
        })}
    </div>
}

export default CardContainer