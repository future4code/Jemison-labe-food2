import styled from "styled-components";

export const RegistrationContainer = styled.div`
    display: grid;
    place-items: center;
    padding: 1rem;

    p {
        text-align: center;
    }
`;

export const Logo = styled.div`
    margin-top: 4.25rem;
    margin-bottom: 1.75rem;
`;

export const Form = styled.form`
    display: grid;
    gap: 0.688rem;
    color: #b8b8b8;
    font-family: Roboto;
    font-size: 0.75rem;
    letter-spacing: -0.29px;
`;

export const Label = styled.label`
    background: #fff;
    padding: 0.188rem 0.25rem 0.063rem 0.313rem;
    margin-left: 10px;
`;

export const Input = styled.input`
    display: block;
    margin-top: -7px;
    border: 1px solid #b8b8b8;
    border-radius: 2px;
    height: 3.5rem;
    width: 20.5rem;
    padding: 1rem;
    outline: none;
    ::placeholder {
        color: #d0d0d0;
    }
`;
