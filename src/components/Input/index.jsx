import { Container } from "./styles";

export function Input({ title, icon: Icon, ...rest }) {
	return (
		<Container>
			{Icon && <Icon size={18} />}
			<input {...rest} />
			{title}
		</Container>
	);
}
