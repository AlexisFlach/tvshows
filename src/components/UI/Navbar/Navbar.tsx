import {Nav} from './Navbar.styled'
import { StyledLink } from './Navbar.styled'

const Navbar = () => {

const links = [
    { to: '/shows', text: 'Shows' },
]
  return (
    <Nav>
      <StyledLink to="/"><h1>TV Shows</h1></StyledLink>
      {links.map((link) => (
        <StyledLink key={link.to} to={link.to}>
          {link.text}
        </StyledLink> 
      ))}
    </Nav>
  )
}

export default Navbar