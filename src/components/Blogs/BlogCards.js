import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ImBlog } from "react-icons/im";

function BlogCards(props) {
  return (
    <Card className="blog-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" className="blog-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "0.95em" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <ImBlog /> &nbsp;
          Read Article
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCards;
