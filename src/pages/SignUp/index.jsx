import { Background, Container, Form } from '../SignUp/styles'
import { Button } from '../../components/Button'
import { Input  } from '../../components/Input'
import polygon from '../../assets/svg/Polygon.svg'

export function SignUp (){
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
            {/* <h1>Create your account</h1> */}

            <span>Your name</span>
            <Input
              placeholder='Example: Maria da Silva'
              type='text'
            />

            <span>E-mail</span>
            <Input
              placeholder='Example: exemple@mail.com'
              type='e-mail'
            />
            
            <span>Password</span>
            <Input
              placeholder='Minimum of 6 characters.'
              type='password'
            />
      
            <Button title='Create new account'/>
          
            <strong>Already have a account ?</strong>
          </Form>
    </Container>
  )
}