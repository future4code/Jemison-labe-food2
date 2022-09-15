import styled from "styled-components";

export const RegistrationContainer = styled.div`
    display: grid;
    place-items: center;
    position: absolute;
    top: 4.25rem;

    p {
        padding: 0.75rem 2rem;
        width: 100%;
        text-align: center;

        &:first-child {
            margin-bottom: 0.5rem;
        }

        &:last-child {
            button {
                margin-left: 5px;
            }
        }
    }
`;

export const Logo = styled.div`
    margin-bottom: 1.75rem;

    img {
        width: 6.5rem;
        height: 3.625rem;
    }
`;

export const Form = styled.form`
    display: grid;
    gap: 0.25rem;
    color: #b8b8b8;
    font-family: Roboto;
    font-size: 0.75rem;
    letter-spacing: -0.29px;
    margin-bottom: 1rem;
`;

export const Label = styled.label`
    background: #fff;
    padding: 0 2rem 0.5rem 0.5rem;
    margin-left: 10px;
    position: relative;
`;

export const Input = styled.input`
    display: block;
    margin-top: -8px;
    border: 1px solid #b8b8b8;
    border-radius: 4px;
    height: 3.5rem;
    width: 20.5rem;
    padding: 1rem;
    outline: none;
    ::placeholder {
        color: #d0d0d0;
    }
    :focus {
        border-color: #e02020;
    }
`;

export const Botao = styled.button`
    background: #e8222e;
    border: none;
    border-radius: 2px;
    padding: 0.75rem 1rem;
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
    margin-top: 0.75rem;
`;
