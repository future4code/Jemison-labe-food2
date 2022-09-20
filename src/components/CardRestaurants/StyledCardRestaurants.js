import styled from "styled-components";

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