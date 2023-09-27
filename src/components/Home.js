import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../restaction";



function Home() {

  // object for useSelector
  const result=useSelector(state=>state.reducer1)
const {restList}=result





  // create object for usedispatch hook
  const dispatch=useDispatch()

  useEffect(() => {
    // getrest();
    dispatch(getData)
  }, []);

  return (
    <Row>
      {restList.map((i) => (
        <Col id="a1" sm={12} md={6} lg={4} xl={3}>

          <Link to={`viewrest/${i.id}`} style={{textDecoration:'none'}}>
          <Card className="m-5 py-3"
          style={{ width: "18rem" }}>
             <Card.Title className="mt-1 p-1 text-center">{i.name}</Card.Title>

            <Card.Img className="w-100 " variant="top" src={i.photograph} />
            <Card.Body>           
              <Card.Text>
              {i.address}
              </Card.Text>
            </Card.Body>
          </Card></Link>
        </Col>
      ))}
    </Row>
  );
}

export default Home;
