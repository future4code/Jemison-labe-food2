import styled from "styled-components";

export const Title = styled.h3`
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: -0.39px;
    padding: 0.675rem;
    text-align: center;
`;

export const Contents = styled.div`
    margin-top: 2.8rem;
    width: 20.5rem;
`;

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
    grid-template-columns: repeat(4, 5.438rem);
    gap: 0.5rem;
    overflow-x: scroll;
    padding-bottom: 0.5rem;
    text-align: center;
    margin: 0.5rem 0;

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

    @media screen and (max-width: 600px) {
        ::-webkit-scrollbar {
            height: 0px;
            width: 0px;
        }
    }

    button {
        color: #000;
        background: #fff;
        border-radius: 4px;
        padding: 0.75rem 0;
        width: 100%;

        &:hover {
            background: #f2f2f2;
        }
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

    position: sticky;
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
