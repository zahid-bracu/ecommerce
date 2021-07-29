import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import { Button } from 'react-bootstrap';
import mobile from '../../resource/card/mobile.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
          <Button className="btn btn-sm"  variant="primary">Add</Button>
                 <Link to="viewdetails">
                 <Button className="btn btn-dark text-white btn-sm ml-2 ">View Details</Button>
                 </Link>   
        </CardBody>
      </Card>
     
  );
};

export default ItemCard;