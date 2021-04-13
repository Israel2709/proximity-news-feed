import './style.scss'
import logo from '../../../assets/nav-logo.png'
import{
  Navbar,
  NavbarBrand,
  NavbarText
} from 'reactstrap'

export const MainNavbar = () => {
    return (
        <Navbar color="light" light expand="md" className="d-flex justify-content-between mb-3">
            <NavbarBrand href="/"><img src={logo} alt="Proximity" /></NavbarBrand>
            <NavbarText>News Feed</NavbarText>
        </Navbar>
    )
}