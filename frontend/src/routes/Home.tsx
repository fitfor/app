import { Container, Row } from "react-bootstrap";
import AvatarImage from "../components/AvatarImage";
import { withBottomNavigation } from "../components/BottomNavigation";
import PageTitle from "../components/PageTitle";
import RecommendationTile from "../components/RecommendationTile";

function Home() {
    return (
        <Container >
            <PageTitle style={{textAlign:'center'}}>Welcome back, John!</PageTitle>
            <Row className='' style={{ alignItems: 'center', flexDirection: 'column', textAlign: 'center'}}>
                <AvatarImage src='https://source.unsplash.com/random/300x300' />
                <p className='mt-5'>You can do this, I believe in you.</p>
            </Row>
            <Row xs={2} justifyContent='center'>
                <RecommendationTile categoryId='enduranceExercise'></RecommendationTile>
                <RecommendationTile categoryId='focusExercise'></RecommendationTile>
                <RecommendationTile categoryId='sleepingExercise'></RecommendationTile>
                <RecommendationTile categoryId='healthyEating'></RecommendationTile>
            </Row>
        </Container>
    );
}

export default withBottomNavigation(Home)