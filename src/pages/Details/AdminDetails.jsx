import {
	Description,
	DishDetails,
	Heading,
	Tags,
	TextBox,
	Session,
} from "./styles";

import backSignal from "../../assets/svg/backSignal.svg";
import salad from "../../assets/png/Salad.png";
import { SmallButtonAdmin } from "../../components/SmallButton/SmallButtonAdmin.jsx";
import { Link } from "react-router-dom";

function DishCard(props) {
	if (props.id == 1) {
		return (
			<DishDetails>
				<Heading>
					<Link to="/">
						<img
							id="arrow"
							src={backSignal}
							alt="return button to main page"
							title="return"
						/>
						<span>return</span>
					</Link>
				</Heading>
				<img src={salad} alt="Plate picture." />
				<TextBox>
					<p>{props.name}</p>
					<Description>{props.description}</Description>
					<Session>
						{props.tags.map((tag) => (
							<Tags key={tag}>{tag}</Tags>
						))}
					</Session>

					<SmallButtonAdmin title={"Edit Plate"} />
				</TextBox>
			</DishDetails>
		);
	}
}

export default DishCard;
