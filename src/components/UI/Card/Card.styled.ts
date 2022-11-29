import styled from "styled-components";

export const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  cursor: pointer;
  img {
    width: 100%;
    align-self: center;
    justify-self: center;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    img {
      display: none;
   }
   h2 {
      color: white;
    }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`