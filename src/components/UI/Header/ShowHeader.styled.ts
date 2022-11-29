import styled from "styled-components";

export const ShowHeader = styled.div`
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: space-between;
    margin-bottom: 1rem;
    height: 50vh;

    div {
        display: flex;
        margin-top: 4rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 1000%;
        height: 100%;
        padding: 1rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    p {
        margin-top: 1rem;
        padding: 3rem;
        font-size: 1rem;
        font-weight: 700;
        text-align: center;
    }

`;