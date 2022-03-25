import { Col, Row } from "react-bootstrap";
import { categoryColors, CategoryIDs, categoryNames } from "../../recommendations";
import GridTile from "../GridTile";


function RecommendationTile(props: any) {
  const categoryId = props.categoryId as CategoryIDs;

  return (
    <GridTile
      {...props}
      style={{ minHeight: 100 }}
      backgroundColor={categoryColors[categoryId]}
      opacityHex={40}
      href={encodeURI('/activity/'+categoryId)}
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
