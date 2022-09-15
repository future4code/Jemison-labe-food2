import styled, { createGlobalStyle } from "styled-components";
import font1 from "./assets/fonts/Roboto-Regular.ttf";
import font2 from "./assets/fonts/SFProText-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@font-face {
    font-family: Roboto;
    src: local(Roboto-Regular), url(${font1}) format("truetype");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }

@font-face {
    font-family: SFProText;
    src: local(SFProText-Regular), url(${font2}) format("truetype");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }

body {
    display: grid;
    place-items: center;
    width: 100vw;
    height: 100vh;
    background: #202023;

    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
}

button {
    cursor: pointer;
    background: none;
    border: none;
    font-family: Roboto;
    font-size: 1rem;
    color: #000;
    letter-spacing: -0.39px;
}

a {
    color:inherit;
    text-decoration: none;
}

img { 
    display: block;
    max-width: 100%;
}

ul, li{
    list-style: none;
}


`;

export const Container = styled.div`
    display: grid;
    place-items: center;
    background: #fff;
    min-width: 22.5rem;
    min-height: 41.688rem;
    padding: 1rem 0.625rem 1rem;
    position: relative;
`;
