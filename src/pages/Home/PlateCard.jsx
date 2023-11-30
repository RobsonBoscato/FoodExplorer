import { SmallButton } from "../../components/SmallButton/index.jsx";
import { Card, CardBuy, CounterDish } from "./styles.js";
import plus from "../../assets/svg/Plus.svg";
import minus from "../../assets/svg/Minus.svg";
import receipt from "../../assets/svg/Receipt.svg";
import emptyLike from "../../assets/svg/EmptyHeart.svg";
import Pencil from "../../assets/svg/Pencil.svg";
import { useNavigate } from "react-router-dom";
import { isAdmin } from "../../hooks/auth.jsx";

import { api } from "../../services/api.js";

export function PlateCard(props) {
	const navigate = useNavigate();
	const imageUrl = `${api.defaults.baseURL}/files/${props.image}`;

	function addToCart() {
		alert("O item foi adicionado ao carrinho");
	}

	return (
		<Card>
			{isAdmin() ? (
				<img
					id="button-like"
					src={Pencil}
					alt="empty heart, click to like and favorite a dish"
				/>
			) : (
				<img
					id="button-like"
					src={emptyLike}
					alt="empty heart, click to like and favorite a dish"
				/>
			)}
			<a onClick={() => navigate(`/plates/${props.id}`)}>
				<img
					src={imageUrl}
					onError={({ currentTarget }) => {
						currentTarget.onerror = null; // prevents looping
						currentTarget.src =
							"https://avatars.steamstatic.com/b5bd56c1aa4644a474a2e4972be27ef9e82e517e_full.jpg";
					}}
				/>
				<span>{props.title}</span>
				<p>{props.description}</p>
			</a>

			<CardBuy />
			<span> R$ {props.price}</span>

			{isAdmin() ? (
				<></>
			) : (
				<>
					<CounterDish>
						<img src={plus} alt="button to add dishes in your order" />
						<p>0</p>
						<img src={minus} alt="button to decrease the quantity at your order" />
					</CounterDish>

					<SmallButton title={"Add to cart"} onClick={addToCart} />
				</>
			)}
		</Card>
	);
}

export default PlateCard;
