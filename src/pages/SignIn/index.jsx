import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import {Background, Container, Form} from "./styles";
import polygon from "../../assets/svg/polygon.svg"


export function SignIn() {
  return (
    <Container>
    <Background>
      <img 
        src={polygon} 
        alt="blue polygon logo for FoodExplorer" 
      />

      <p>food explorer</p>
    </Background>

    <Form>
      <span>E-mail</span>
      <Input
        type="email" 
        placeholder="Example: example@example.com"
        />

      <span>Password</span>
      <Input
        type="password"  
        placeholder="Minimun of 6 characters"

      />
      <Button
      title={"Login"}></Button>

      <strong>Create an account</strong>

    </Form>

    </Container>
  )
} 
