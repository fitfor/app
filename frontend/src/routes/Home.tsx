import { Container, Row } from "react-bootstrap";
import AvatarImage from "../components/AvatarImage";
import { withBottomNavigation } from "../components/BottomNavigation";
import RecommendationTile from "../components/RecommendationTile";

function Home() {
    return (
        <Container >
            <Row className='mt-4' style={{ alignItems: 'center', flexDirection: 'column', textAlign: 'center'}}>
                <h2 className='mb-4'>Welcome back, John!</h2>
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