import styled from "styled-components";

export const StatusBar = styled.header`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0.312rem;
    width: 22.5rem;
    height: 1.25rem;
    padding: 0.219rem 0.375rem 0.156rem 0.375rem;
    font-size: 0.75rem;
    color: #030303;
`;

export const Signal = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    width: 8.75rem;
    height: 100%;
    font-family: SFProText;
`;

export const Information = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }
`;
