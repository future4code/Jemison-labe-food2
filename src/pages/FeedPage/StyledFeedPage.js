import styled from "styled-components";

export const Title = styled.h3`
    font-weight: normal;
    letter-spacing: -0.39px;
    padding: 0.675rem;
    text-align: center;
`;

export const Contents = styled.div`
    margin-top: 2.8rem;
    max-width: 22.5rem;

    @media screen and (max-width: 800px) {
        max-width: calc(100vw - 2rem);
    }
`;

export const ContentsHeader = styled.div``;

export const Search = styled.div`
    position: relative;
    img {
        position: absolute;
        top: 1rem;
        left: 1rem;
    }

    input {
        padding-left: 3rem;
    }
`;

export const Categories = styled.ul`
    display: grid;
    gap: 0.5rem;
    overflow-x: scroll;
    padding-bottom: 0.5rem;
    text-align: center;
    margin: 0.5rem 0;
    cursor: pointer;

    ::-webkit-scrollbar {
        height: 5px;
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: #b8b8b8;
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background: #fff;
    }

    @media screen and (max-width: 800px) {
        /* grid-template-columns: repeat(4, 5.438rem); */
        padding: 0;
        width: 100vw;

        ::-webkit-scrollbar {
            height: 0px;
            width: 0px;
        }
    }

    li {
        width: 5.438rem;
        height: 2.625rem;
        grid-row: 1/-1;
    }

    button {
        color: #000;
        background: #fff;
        border-radius: 4px;
        padding: 0.75rem 0;
        width: 100%;
    }
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Card = styled.figure`
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    margin-bottom: 0.5rem;
    cursor: pointer;

    img {
        border-radius: 8px;
    }

    figcaption {
        padding: 1rem;

        h4 {
            color: #e8222e;
            margin-bottom: 0.25rem;
        }

        div {
            display: flex;
            justify-content: space-between;
            color: #b8b8b8;
        }
    }
`;

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
