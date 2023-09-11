import { SmallButton } from "../../components/SmallButton/index.jsx";
import { Card, CardBuy, CounterDish } from "./styles.js";
import plus from "../../assets/svg/Plus.svg"
import minus from "../../assets/svg/Minus.svg"
import emptyLike from "../../assets/svg/EmptyHeart.svg"

function PlateCard(props) {
  return (
    <Card>
      <img id="button-like" src={emptyLike} alt="empty heart, click to like a dish" />
			<img src={props.picture} alt="picture of a Salad Plate" />
			<p>{props.description}</p>
			<span> R$ {props.price}</span>
			<CardBuy />
      
      <CounterDish>
        <img src={plus} alt="button to add dishes in your order" />
        <p>0</p>
        <img src={minus} alt="button to decrease the quantity at your order" /> 
      </CounterDish>

			<SmallButton title={"Incluir"} />

		</Card>
	);
}

export default PlateCard;
