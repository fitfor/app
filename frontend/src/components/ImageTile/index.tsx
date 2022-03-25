import { Image } from 'react-bootstrap'
import GridTile from '../GridTile'

function ImageTile(props: any) {
    return (
        <GridTile {...props}>
            <Image style={{ width: '100%' }} src={props.src} />
        </GridTile>)
}

export default ImageTile