import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 4rem;
    background-color: #fff;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
    font-weight: 600;
`;