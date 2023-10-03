import { Container } from "./styles";

export function Button({ title, variant, ...rest }) {
	return (
		<Container type="button" $variant={variant} {...rest}>
			{title}
		</Container>
	);
}
