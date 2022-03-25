import { Container, Row } from "react-bootstrap";
import { withBottomNavigation } from "../../components/BottomNavigation";
import ImageTile from "../../components/ImageTile";
import PageTitle from "../../components/PageTitle";

function MyAccount() {
  return (
    <Container style ={{marginBottom: 100}}>
      <PageTitle>My Library</PageTitle>
      <p>You're getting closer to unlock your next reward!</p>
      <Row>
        <ImageTile src="https://firebasestorage.googleapis.com/v0/b/vaxverify-63b54.appspot.com/o/WhatsApp%20Image%202022-03-25%20at%207.22.24%20AM.jpeg?alt=media&token=bb880524-5fe2-4379-850e-13fe46c4fd76"></ImageTile>
      </Row>
      <h4 className='mt-5 mb-4'>Your past achievements</h4>
      <Row xs={2} justifyContent="center">
        <ImageTile style={{height:400}} src="https://firebasestorage.googleapis.com/v0/b/vaxverify-63b54.appspot.com/o/WhatsApp%20Image%202022-03-25%20at%208.16.59%20AM.jpeg?alt=media&token=934e8dea-d56c-4fe2-b40c-d6bf77bcb0dc"></ImageTile>
        <ImageTile style={{height:400}} src="https://firebasestorage.googleapis.com/v0/b/vaxverify-63b54.appspot.com/o/WhatsApp%20Image%202022-03-25%20at%208.14.41%20AM.jpeg?alt=media&token=4a3ff2be-1223-4440-aa7b-27b5a66279d2"></ImageTile>
        <ImageTile style={{height:400}} src="https://firebasestorage.googleapis.com/v0/b/vaxverify-63b54.appspot.com/o/WhatsApp%20Image%202022-03-25%20at%208.14.19%20AM.jpeg?alt=media&token=e29d73e4-e63e-4b2f-b11c-e4b62bd31bd4"></ImageTile>
        <ImageTile style={{height:400}} src="https://firebasestorage.googleapis.com/v0/b/vaxverify-63b54.appspot.com/o/WhatsApp%20Image%202022-03-25%20at%208.14.17%20AM.jpeg?alt=media&token=e4584013-039b-4f53-868a-432b344f92f9"></ImageTile>
      </Row>
    </Container>
  );
}

export default withBottomNavigation(MyAccount);
