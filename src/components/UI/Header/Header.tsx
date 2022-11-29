import { Link } from "react-router-dom";
import { StyledHeader } from './Header.styled'
import { Button } from '../Button/Button.styled'
import { StyledLink } from "../Link/Link.styled";
export const Header = () => {
    return (
        <StyledHeader>
        <h1>TV Shows</h1>
        <StyledLink to="/shows">Go to shows</StyledLink>
        </StyledHeader>
    )
}
