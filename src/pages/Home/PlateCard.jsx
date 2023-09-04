import { Card, CardBuy } from './styles.js';

function PlateCard(props) {
  return (<Card>
    <img src={props.picture} alt="picture of a Salad Plate" />
    <p>{props.description}</p>
    <span> R${props.price}</span>
    <CardBuy />
  </Card>)
}

export default PlateCard;