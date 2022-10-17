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

export const Contents = styled.div`
   margin-top: 2.8rem;
   margin-bottom: 3.063rem;
   width: 22.5rem;

   @media screen and (max-width: 800px) {
      max-width: calc(100vw - 2rem);
   }

   .emptyCart {
      margin-top: 0.25rem;
      margin-bottom: 2.063rem;
      text-align: center;
      padding: 0.75rem;
   }
`;

export const Menu = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   background: #fff;
   box-shadow: 0 -0.5px 0 0 rgba(0, 0, 0, 0.25);
   position: fixed;
   bottom: 0;
   width: calc(100% + 2rem);
   justify-items: center;
   z-index: 9999;

   button {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 0.688rem 2.875rem 0.688rem 2.938rem;
   }
`;

export const Title = styled.h3`
   font-size: 1rem;
   font-weight: normal;
   letter-spacing: -0.39px;
   padding: 0.675rem;
   text-align: center;
`;

export const TitleCard = styled.h3`
   font-size: 1rem;
   font-weight: normal;
   letter-spacing: -0.39px;
   margin-top: 1rem;
   margin-bottom: 0.5rem;

   &::after {
      display: block;
      content: "";
      border-bottom: 2px solid #000;
      margin-top: 0.5rem;
   }
`;
