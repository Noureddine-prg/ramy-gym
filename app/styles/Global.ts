import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100vw;
    height: 100vh;
    //font-family: 
  }
`;

export const Section = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;  
  border: solid 1px;
  display: flex;
  justify-content: center; 
  align-items: center;
`


//Buttons: 


//Black button white text med 
export const ButtonVariationA = styled.button`
  background-color: black;
  color: white;
  border: none; 
  padding: 10px 10px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 4px;

  &:hover{
    background-color: #333;
  }

  &:focus {
    outline: none; 
    box-shadow: 0 0 0 2px white;
  }

`;

export const ButtonVariationB = styled.button`
  background-color: white;
`

