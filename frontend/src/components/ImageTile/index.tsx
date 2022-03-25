import { Image } from 'react-bootstrap'
import GridTile from '../GridTile'

function ImageTile(props: any) {
    return (
        <GridTile {...props} style={{margin:0,padding:0, ...props.style}}>
            <Image style={{ width: '100%', height:'100%', borderRadius: '10px'}} src={props.src} />
        </GridTile>)
}

export default ImageTile