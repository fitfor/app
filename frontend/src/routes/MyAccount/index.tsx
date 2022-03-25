import { Container } from "react-bootstrap";
import { withBottomNavigation } from "../../components/BottomNavigation";
import PageTitle from "../../components/PageTitle";

function MyAccount() {
  return (
    <Container>
      <PageTitle>My Account</PageTitle>
    </Container>
  );
}

export default withBottomNavigation(MyAccount);
