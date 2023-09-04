import { Header } from "../Header";
import { Container, Heading } from "./styles";


export function SmallButton({ title, ...rest }) {
	return (
		<Container

      type="button" 
      {...rest}
      >
			{title}
		</Container>
	);
}
