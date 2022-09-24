import styled from "styled-components";

export const MainCard = styled.figure`
    border-radius: 8px;
    margin-bottom: 1rem;

    img {
        object-fit: cover;
        border-radius: 8px 8px 0 0;
        margin-bottom: 0.75rem;
        width: 100vw;
    }

    figcaption {
        margin-bottom: 0.5rem;

        h4 {
            color: #e8222e;
            margin-bottom: 0.25rem;
            font-weight: normal;
        }

        ul {
            display: grid;
            gap: 0.5rem;
            color: #b8b8b8;

            li {
                display: flex;
                gap: 2rem;
            }
        }
    }
`;

export const RestaurantDetailsSections = styled.div`
    h3 {
        font-size: 1rem;
        font-weight: normal;
        letter-spacing: -0.39px;
        color: #000;
        margin-bottom: 0.5rem;

        &:after {
            display: block;
            content: "";
            background: #000;
            width: 100%;
            height: 0.063rem;
            margin-top: 0.5rem;
        }
    }
`;

export const SecondaryCards = styled.div`
    display: grid;
    gap: 0.5rem;
    margin-bottom: 1rem;
`;

export const SecondaryCard = styled.figure`
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    height: 7rem;
    width: 100%;
    position: relative;

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
        }

        button {
            position: absolute;
            right: 0;
            bottom: 0;
            padding: 0.5rem 1.281rem 0.563rem 1.344rem;
            border-radius: 8px 0;
            border: solid 1px #000;
            font-size: 0.75rem;

            &:hover {
                background: #f2f2f2;
            }
        }
    }
`;