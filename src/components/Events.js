import React from "react";
import {
    CardGroup,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Row,
    Col
} from "reactstrap";


const Shopping = () => {
    return (
        <Row>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
       
        Narmada Mahotsav 
      </CardTitle>
      <CardText>
      Visit during evening hours so you can able to attend the evening puja. Nice calm place to sit and enjoy the river Narmada.
      </CardText>
      <Button>
        Reserve Now
      </Button>
    </Card>
  </Col>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
       Sachet-Parampara Concert
      </CardTitle>
      <CardText>
       In the Jabali palace on 15th October.......
      </CardText>
      <Button>
       Reserve Now
      </Button>
    </Card>
  </Col>
</Row>
    )
}

export default Shopping;

