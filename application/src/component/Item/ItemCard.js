import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import mobile from '../../resource/card/mobile.png'
import './style.css';

const ItemCard = ({id,title, image, price}) => {
  return (
      <Card className="card-custom mx-2">
        <CardImg top  className="card-img" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-primary" tag="h6">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"> 
            <i className="fa fa-star checked"></i>
            <i className="fa fa-star checked"></i>
            <i className="fa fa-star checked"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
            </CardSubtitle>
          <CardText className="fw-bold">${price}</CardText>
          <Button className="btn btn-success btn-sm px-3">Add</Button>
        </CardBody>
      </Card>
     
  );
};

export default ItemCard;