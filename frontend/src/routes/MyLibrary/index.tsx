import { Container, Row } from "react-bootstrap";
import { withBottomNavigation } from "../../components/BottomNavigation";
import ImageTile from "../../components/ImageTile";
import PageTitle from "../../components/PageTitle";

function MyAccount() {
  return (
    <Container style ={{marginBottom: 100}}>
      <PageTitle>My Library</PageTitle>
      <Row>
        <ImageTile src="https://i.ibb.co/nzT4Zz6/Whats-App-Image-2022-03-25-at-7-22-24-AM.jpg"></ImageTile>
      </Row>
      <h4>Your past achievements</h4>
      <Row xs={2} justifyContent="center">
        <ImageTile src="https://source.unsplash.com/random/480x270?focus"></ImageTile>
        <ImageTile src="https://source.unsplash.com/random/480x270?sleep"></ImageTile>
        <ImageTile src="https://source.unsplash.com/random/480x270?running"></ImageTile>
        <ImageTile src="https://source.unsplash.com/random/480x270?meditation"></ImageTile>
      </Row>
    </Container>
  );
}

export default withBottomNavigation(MyAccount);
