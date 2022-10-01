import styled from "styled-components";

export const RegistrationContainer = styled.div`
   display: grid;
   place-items: center;
   position: absolute;
   top: 4.25rem;
   color: #b8b8b8;
   font-family: Roboto;
   letter-spacing: -0.29px;

   p button {
      margin-left: 0.5rem;
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
   gap: 0.313rem;

   legend {
      text-align: center;
      margin-bottom: 0.25rem;
      color: #000;
   }
`;

export const Label = styled.label`
   background: #fff;
   padding: 0 2rem 0.5rem 0.5rem;
   margin-left: 10px;
   position: relative;
   font-size: 0.75rem;
`;

export const Input = styled.input`
   display: block;
   margin-top: -8px;
   border: 1px solid #b8b8b8;
   border-radius: 4px;
   height: 3.5rem;
   font-size: 1rem;
   min-width: 22.5rem;
   padding: 1rem;
   outline: none;
   ::placeholder {
      color: #d0d0d0;
   }
   :focus {
      border-color: #e02020;
   }
   ::-ms-reveal {
      display: none;
   }

   @media screen and (max-width: 800px) {
      min-width: auto;
      width: calc(100vw - 2rem);
   }
`;

export const InputSearch = styled(Input)`
   border-radius: 2px;

   :focus {
      border-color: #b8b8b8;
   }
`;

export const Button = styled.button`
   background: #e8222e;
   border: none;
   border-radius: 2px;
   padding: 0.75rem 1rem;
   letter-spacing: -0.39px;
   margin-top: 0.688rem;
   margin-bottom: 1.75rem;
   width: 100%;
`;

// Tela de login e cadastro
export const InputEye = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 auto;
   right: 0;
   top: 0;
   bottom: 0;
   width: auto;
   color: #000;
   font-size: 20px;

   .btn-password {
      cursor: pointer;
      padding: 8px;
      outline: unset;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      border: unset;
      right: 2px;
   }
`;

export const Highlight = styled.li`
   color: #df6661;

   &.deu-certo {
      color: #00a878;
   }
`;
