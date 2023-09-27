import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Operatinghours from "./Operatinghours";
import Review from "./Review";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../restaction";

function Restview() {
  // object for useSelector
  const result = useSelector((state) => state.reducer1);
  const { restList } = result;

  // create object for usedispatch hook
  const dispatch = useDispatch()

  //object for useparams hook
  const params = useParams()

  const singleRest = restList.find((i) => i.id == params.id)
  console.log(singleRest);

  useEffect(() => {
    dispatch(getData)
  }, [])

  return (
    <>
      {singleRest ? (
        <Row>
          <Col lg={6} md={12} sm={12} xl={4}>
            <Image
              className="w-100 p-5"
              style={{ height: "800px" }}
              src={singleRest.photograph}
              rounded
            />
          </Col>

          <Col lg={6} md={12} sm={12} xl={4}>
            <h1>{singleRest.name}</h1>
            <ListGroup className="fs-4 mt-5">
              <ListGroup.Item id="d" className="p-4 mt-2">
                neighbourhood{" "}
                <strong className="text-warning">
                  {singleRest.neighborhood}
                </strong>{" "}
              </ListGroup.Item>
              <ListGroup.Item id="d" lassName="p-4 mt-2">
                Address
                <strong className="text-warning">{singleRest.address}</strong>
              </ListGroup.Item>
              <ListGroup.Item id="d" className="p-4 mt-2">
                cusine type{" "}
                <strong className="text-warning">
                  {singleRest.cuisine_type}
                </strong>
              </ListGroup.Item>
              <ListGroup.Item id="d" className="p-4 mt-2">
                <Operatinghours timedata={singleRest.operating_hours} />{" "}
              </ListGroup.Item>
              <ListGroup.Item id="d" className="p-4 mt-2">
                <Review reviews={singleRest.reviews} />
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      ) : (
        "null"
      )}
    </>
  );
}

export default Restview;
