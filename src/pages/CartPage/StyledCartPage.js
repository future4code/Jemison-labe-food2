
import styled from "styled-components";

export const Address = styled.div`
  width: 22.5rem;
  height: 4.75rem;
  margin: 0.063rem 0 0.1rem;
  padding: 1rem;
  background-color: #eee;

    div p {
        &:nth-child(1) {
            color: #b8b8b8;
            margin-bottom: 0.5rem;
            width: 100%;
        }
        &:nth-child(2) {
            margin-bottom: 0;
        }
    }
`;

export const OrderHistory = styled.div`
    padding: 1rem 0;

    p {
            &:nth-of-type(1) {
                letter-spacing: -0.39px;
                color: #e8222e;
                font-size: 1rem;
                padding: 0.338rem 0;
            }

            &:nth-of-type(2), 
            &:nth-of-type(3) {
                letter-spacing: -0.39px;
                font-size: 1rem;
                color: #b8b8b8;
                padding: 0.338rem 0;
            }
        }
`;


export const Pag = styled.div`

      p {
            &:nth-of-type(1) {
                letter-spacing: -0.39px;
                color: #000;
                font-size: 1rem;
                display: block;
                text-align: right;
            }

            &:nth-of-type(2) {
                letter-spacing: -0.43px;
                color: #000;
                display: block;
                text-align: right;
            }
}
`

export const MainCard = styled.figure`
    display: flex;
    align-items: center;
    height: 7rem;
    width: 100%;
    position: relative;
    margin-bottom: 0.5rem;
    width: 22.5rem;
    height: 7rem;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
  
    img {
       width: 6rem;
       height: 7rem;
       //margin: 0 1rem 0 0;
       object-fit: contain;
    }

    figcaption {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        border-radius: 0 8px 8px 0;
        height: 100%;
        width: 100%;

        p {
            &:nth-of-type(1) {
                letter-spacing: -0.39px;
                color: #e8222e;
                font-size: 1rem;
            }

            &:nth-of-type(2) {
                font-size: 0.75rem;
                letter-spacing: -0.29px;
                color: #b8b8b8;
            }

            &:nth-of-type(3) {
                letter-spacing: -0.39px;
                color: #000;
                font-size: 1rem;
            }

            &.null {
                display: none;
            }

            &.view {
                background: #fff;
                color: #e8222e;
                border-radius: 0 8px;
                border: solid 1px currentColor;
                width: max-content;
                padding: 0.438rem 0.75rem;
                position: absolute;
                top: -1px;
                right: -1px;
            }
        }

        button {
            position: absolute;
            right: -1px;
            bottom: -1px;
            color: #e8222e;
            padding: 0.5rem 1.281rem 0.563rem 1.344rem;
            border-radius: 8px 0;
            border: solid 1px currentColor;
            font-size: 0.75rem;
            width: 5.625rem;

            &:hover {
                background: #f2f2f2;
            }

            &.btn-remove {
                color: #e8222e;
            }
        }
    }
`;

export const RadioButton = styled.div`
  object-fit: contain;

  p{
        display: flex;
        justify-content: space-around;
        padding: 1rem;
        margin-top: -35px;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: #000;
  }
`

export const Button = styled.div`
  width: 22.5rem;
  height: 2.625rem;
  padding: 0.75rem 1rem;
  border-radius: 2px;
  background-color: #e8222e;

  button{
    width: 18.5rem;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;
  }
`

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fff;
    box-shadow: 0 -0.5px 0 0 rgba(0, 0, 0, 0.25);

    position: fixed;
    bottom: 0;
    width: calc(100% + 32px);
    z-index: 9999;

    button {
        padding: 0.688rem 2.875rem 0.688rem 2.938rem;

        &:hover {
            background: #f2f2f2;
        }
    }
`;