import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    &:focus {
        outline: none;
        border-color: #000;
    }
`;
