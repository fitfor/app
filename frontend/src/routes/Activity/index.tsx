import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Activity(props: any) {
  let { id } = useParams();
  return <Container style={{ marginBottom: 100 }}>
      {id}
  </Container>;
}

export default Activity;
