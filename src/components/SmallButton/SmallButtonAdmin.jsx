import { Container } from "./SmallButtonAdmin";

export function SmallButtonAdmin({ title, ...rest }) {
	return (
		<Container type="button" {...rest}>
			{title}
		</Container>
	);
}
