import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export function TagItem({
	isNew,
	value,
	placeholder,
	onChange,
	onClick,
	...rest
}) {
	return (
		<Container isNew={isNew}>
			<input
				type="text"
				value={value}
				placeholder={placeholder}
				readOnly={!isNew}
				onChange={onChange}
				{...rest}
			/>

			<button
				type="button"
				className={isNew ? "button-add" : "button-delete"}
				onClick={onClick}
			>
				{isNew ? <FiPlus /> : <FiX />}
			</button>
		</Container>
	);
}
