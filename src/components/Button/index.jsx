import { Container } from "./styles";

export function Button({ title, variant, loading, ...rest }) {
	return (
		<Container type="button" $variant={variant} {...rest} disabled={loading}>
			{title}
		</Container>
	);
}
