import Image from 'react-bootstrap/Image'

function AvatarImage(props: any) {
    return (
        <div style={{ width: 150 }}>
            <Image style={{ width: '100%' }} roundedCircle src={props.src} />
        </div>
    )
}

export default AvatarImage