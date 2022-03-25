import { Col, Row } from "react-bootstrap"

const styles = {
    padding: '0.5rem'
}



function GridTile(props: any) {
    const color = props.backgroundColor || '#FFFFFF'
    const innerStyles = {
        background: `linear-gradient(135deg, ${color}90,${color}FF)`,
        boxShadow: `0px 0px 40px 5px ${props.backgroundColor || '#000000'}${props.opacityHex || '30'}`,
        borderRadius: '10px'
    }

    return <Col xs={props.xs} sm={props.sm} md={props.md} lg={props.lg} xl={props.xl} style={{ margin: 0, padding: 0 }}>
        <Row className='w-100' style={{padding:'0.7rem', margin:0}}>
            <Col style={{ ...innerStyles, ...props.style }}>{props.children}</Col>
        </Row>
    </Col>
}

export default GridTile