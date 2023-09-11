import { Description, DishDetails, Heading, Tags, TextBox, CounterOrders, Session } from "./styles";
import backSignal from "../../assets/svg/backSignal.svg"
import salad from "../../assets/png/Salad.png"
import plus from "../../assets/svg/Plus.svg"
import minus from "../../assets/svg/Minus.svg"
import { SmallButton } from "../../components/SmallButton";

function DishCard(props) {
  if (props.id == 1) {
    return (
      <DishDetails>
      <Heading>
          <img id="arrow" src={backSignal} alt="return button to main page" title="return"/>
          <span>return</span>
        </Heading>
        <img src={salad} alt="Plate picture." />
        <TextBox>
            <p>
              {props.name}      
            </p>
          <Description>
            {props.description}
          </Description>
          <Session>
            {props.tags.map(
              (tag) => (              
                <Tags key={tag}>  
                  {tag}                
                  </Tags>
                )
              )
            }
          </Session>

        </TextBox>
        <CounterOrders>
          <CounterOrders>            
            <img src={minus} alt="button to decrease the quantity at your order" />
            <p>0</p>
            <img src={plus} alt="button to add dishes at your order" />
          </CounterOrders>

          <SmallButton 
          id='order' 
          title={` pedir • ${props.price}`}
          />                     
        </CounterOrders> 
    </DishDetails>
    )
  }
}

export default DishCard