import { Button, Col, Container, Row } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PageTitle from "../../components/PageTitle";

import { useNavigate } from "react-router-dom";
import {
  categoryColors,
  CategoryIDs,
  categoryNames,
  recommendationDescriptions,
} from "../../recommendations";

function Activity(props: any) {
  let history = useNavigate();
  let { id } = useParams();
  const cid = id as CategoryIDs;
  const name = categoryNames[cid];
  const description = recommendationDescriptions[cid];
  const color = categoryColors[cid];
  const duration = "10 - 30 mins";

  const SubmitButton = styled.button`
    width: 100%;
    padding: 11px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: #9a0941;
    background: linear-gradient(135deg, ${color}BF 20%, ${color}FF 100%);
    &:hover {
      filter: brightness(1.03);
    }
  `;

  return (
    <Container fluid style={{ marginBottom: 100 }}>
      <Row
        style={{
          background: `linear-gradient(
            135deg,
            ${color}BF 20%,
            ${color}FF 100%
          )`,
          minHeight: "15rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col xs="auto">
          <PageTitle style={{ color: "white", textAlign: "center" }}>
            {name}
          </PageTitle>
        </Col>
      </Row>
      <Row
        className="my-4"
        style={{ textAlign: "center", justifyContent: "center" }}
      >
        <Col xs="auto" style={{ maxWidth: "75%" }}>
          <p>{description}</p>
        </Col>
      </Row>
      <Row
        className="my-4"
        style={{ textAlign: "center", justifyContent: "center" }}
      >
        <Col xs="auto" style={{ maxWidth: "75%" }}>
          <p>Duration: {duration}</p>
        </Col>
      </Row>
      <SubmitButton>Start</SubmitButton>
      <div style={{ minWidth: 24, minHeight: 24 }} onClick={() => history(-1)}> 
        <ArrowLeft
          size={32}
          style={{ color: "white", position: "absolute", top: 20, left: 20 }}
        />
      </div>
    </Container>
  );
}

export default Activity;
