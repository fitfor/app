import { Col, Row } from "react-bootstrap";
import GridTile from "../GridTile";

const categoryColors = {
  "Endurance excercise": "#f79123",
  "Flexibility excercise": "#65c9cb",
  "Focus excercise": "#e30713",
  "HealthyEating ": "#71c065",
  "Motivation excercise": "#3acb80",
  "Relaxation excercise": "#6558a8",
  "Sleeping excercise": "#4e73bf",
  "Strength excercise": "#ed4340",
  "Weighttraining excercise": "#da3313",
};

type CategoryIDs =
  | "Endurance excercise"
  | "Flexibility excercise"
  | "Focus excercise"
  | "HealthyEating "
  | "Motivation excercise"
  | "Relaxation excercise"
  | "Sleeping excercise"
  | "Strength excercise"
  | "Weighttraining excercise";

const categoryNames = {
    "Endurance excercise": "Endurance",
    "Flexibility excercise": "Flexibility",
    "Focus excercise": "Focusing",
    "HealthyEating ": "Healthy Eating",
    "Motivation excercise": "Motivation",
    "Relaxation excercise": "Relaxation",
    "Sleeping excercise": "Sleeping",
    "Strength excercise": "Strength",
    "Weighttraining excercise": "Weight Training",
  };

function RecommendationTile(props: any) {
  const categoryId = props.categoryId as CategoryIDs;

  return (
    <GridTile
      {...props}
      style={{ minHeight: 100 }}
      backgroundColor={categoryColors[categoryId]}
      opacityHex={40}
    >
      <Row className="h-100 align-items-end">
        <Col style={{}}>
          <h4 style={{ fontWeight: 800, textAlign: "right", color: "white" }}>
            {categoryNames[categoryId]}
          </h4>
        </Col>
      </Row>
    </GridTile>
  );
}

export default RecommendationTile;
