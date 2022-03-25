import { Container } from "react-bootstrap";
import { withBottomNavigation } from "../../components/BottomNavigation";
import PageTitle from "../../components/PageTitle";

function MyAccount() {
  return (
    <Container style ={{marginBottom: 100}}>
      <PageTitle>My Account</PageTitle>
    </Container>
  );
}

export default withBottomNavigation(MyAccount);
