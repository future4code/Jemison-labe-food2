import styled from "styled-components";
import logoBranca from "../../assets/img/logo-branca.svg";

export const HomeContainer = styled.div`
    display: grid;
    place-items: center;
    background: #e8222e;
    width: 22.5rem;
    height: 40rem;

    button {
        border: none;
        background: none;
        padding: 20px;

        &::after {
            display: block;
            content: "";
            background: url(${logoBranca}) no-repeat;
            background-size: contain;
            width: 7.875rem;
            height: 4.063rem;
        }
    }
`;
