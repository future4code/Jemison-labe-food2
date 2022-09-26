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

    .CircularProgress{
        position: absolute;
        top: 50vh;
    }
}

button {
    cursor: pointer;
    background: none;
    border: none;
    font-family: Roboto;
    font-size: 1rem;
    color: #000;
    letter-spacing: -0.39px;
    transition: 0.3s;

}

a {
    color:inherit;
    text-decoration: none;
    transition: 0.3s;
    
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
    justify-items: center;
    background: #fff;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    padding-bottom: 0;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        height: 0;
        width: 0;
    }
    ::-webkit-scrollbar-thumb {
        background: none;
    }
    ::-webkit-scrollbar-track {
        background: none;
    }
`;

