import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin-top: 1rem;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;