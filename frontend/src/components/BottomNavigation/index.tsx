import styled from "styled-components";
import { BookFill, HouseFill, PersonFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const NavigationItemContainer = styled.div`
padding-left:10px;
padding-right:10px;`

const NavigationContainer = styled.div`
display:flex;
width:100%;
height: 60px;
background-color:white;
position:relative;
bottom:0px;
margin-top: auto;
justify-content: space-around;
align-items:center;
text-align:center;
box-shadow: 0px 0px 60px 0px rgba(0,0,0,0.20);
`
const NavigationItemText = styled.p`
font-size: 12px;
margin-bottom: 0px;
color: #9a0941`

function NavItem(props: any) {
    const Icon = props.icon
    return <Link style={{textDecoration:'none'}} to={props.href}><NavigationItemContainer>
        <Icon size={24} color='#9a0941' />
        <NavigationItemText>{props.text}</NavigationItemText>
    </NavigationItemContainer></Link>
}

function BottomNavigation() {
    return <NavigationContainer>
        <NavItem icon={BookFill} text='My Library' href='/my-library'></NavItem>
        <NavItem icon={HouseFill} text='Home' href='/'></NavItem>
        <NavItem icon={PersonFill} text='My Account' href='/my-account'></NavItem>
    </NavigationContainer>
}

function withBottomNavigation(Route: any) {
    return function (props: any) {
        return (
            <>
                <Route {...props} />
                <BottomNavigation />
            </>
        )
    }
}

export default BottomNavigation;
export { withBottomNavigation }