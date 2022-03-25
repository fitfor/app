import { Col, Row } from "react-bootstrap"
import GridTile from "../GridTile"

const categoryColors = {
    enduranceExercise: '#f79123',
    flexibilityExercise: '#65c9cb',
    focusExercise: '#e30713',
    healthyEating: '#71c065',
    motivationExercise: '#3acb80',
    relaxationExercise: '#6558a8',
    sleepingExercise: '#4e73bf',
    strengthExercise: '#ed4340',
    weightTrainingExercise: '#da3313',
}

type CategoryIDs = 'enduranceExercise' | 'flexibilityExercise' | 'focusExercise' | 'healthyEating' | 'motivationExercise' | 'relaxationExercise' |
    'sleepingExercise' |
    'strengthExercise' |
    'weightTrainingExercise'


const categoryNames = {
    enduranceExercise: '#f79123',
    flexibilityExercise: '#65c9cb',
    focusExercise: '#e30713',
    healthyEating: '#71c065',
    motivationExercise: '#3acb80',
    relaxationExercise: '#6558a8',
    sleepingExercise: '#4e73bf',
    strengthExercise: '#ed4340',
    weightTrainingExercise: '#da3313',
}

function RecommendationTile(props: any) {
    const categoryId = props.categoryId as CategoryIDs

    return (
        <GridTile {...props} style={{ minHeight: 100 }} backgroundColor={categoryColors[categoryId]} opacityHex={40}>
            <Row className='h-100 align-items-end'><Col style={{}}><h4 style={{ fontWeight: 800, textAlign: 'right', color: 'white' }}>{categoryNames[categoryId]}</h4></Col></Row>
        </GridTile>
    )
}

export default RecommendationTile