import React from "react";
import{ Button, Card, CardBody, CardText, CardTitle, Fade} from 'reactstrap';
import TextForCards from "./TextForCards";

const Cards = (props) =>{
    return(
        <>
        <Card key= "firstCard" classname = "display-3">
          <CardBody>
            <CardTitle>My Card</CardTitle>
            <Button onClick= {()=> props.cardOneState()}> Button</Button>
            <Fade in = {props.fade1} classname= "my-2">
              {props.fade1 ? <CardText>
                <TextForCards cardNum={1} />
              </CardText> : null}
            </Fade>
          </CardBody>
        </Card>
        
         <Card classname = "display-3">
          <CardBody>
            <CardTitle>My Second Card</CardTitle>
            <Button onClick= {()=> props.cardTwoState()}> Button</Button>
            <Fade in = {props.fade2} classname= "my-2">
              {props.fade2 ? <CardText>
              <TextForCards cardNum={2} />
              </CardText> : null}
            </Fade>
          </CardBody>
        </Card>

        <Card classname = "display-3">
          <CardBody>
            <CardTitle>My Third Card</CardTitle>
            <Button onClick= {()=> props.cardThreeState()}> Button</Button>
            <Fade in = {props.fade3} classname= "my-2">
              {props.fade3 ? <CardText>
              <TextForCards cardNum={3} />
              </CardText> : null}
            </Fade>
          </CardBody>
        </Card>

        <Card classname = "display-3">
          <CardBody>
            <CardTitle>My Fourth Card</CardTitle>
            <Button onClick= {()=> props.cardFourState()}> Button</Button>
            <Fade in = {props.fade4} classname= "my-2">
              {props.fade4 ? <CardText>
              <TextForCards cardNum={4} />
              </CardText> : null}
            </Fade>
          </CardBody>
        </Card>

        <Card classname = "display-3">
          <CardBody>
            <CardTitle>My Fifth Card</CardTitle>
            <Button onClick= {()=> props.cardFiveState()}> Button</Button>
            <Fade in = {props.fade5} classname= "my-2">
              {props.fade5 ? <CardText>
              <TextForCards cardNum={5} />
              </CardText> : null}
            </Fade>
          </CardBody>
        </Card>

        <Card classname = "display-3">
          <CardBody>
            <CardTitle>My Sixth Card</CardTitle>
            <Button onClick= {()=> props.cardSixState()}> Button</Button>
            <Fade in = {props.fade6} classname= "my-2">
              {props.fade6 ? <CardText>
              <TextForCards cardNum={6} />
              </CardText> : null}
            </Fade>
          </CardBody>
        </Card>
        </>
    )
}
export default Cards;