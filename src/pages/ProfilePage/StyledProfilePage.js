import styled from "styled-components";

export const Title = styled.h3`
    font-weight: normal;
    letter-spacing: -0.39px;
    padding: 0.675rem;
    text-align: center;
`;

export const Info = styled.div`
   width: 23.5rem;

   margin: 1rem 1rem 0.5rem;
   font-family: Roboto;
   font-size: 1rem;
   font-weight: normal;
   letter-spacing: -0.40px;
   padding: 2rem 0;
   

        p{
            &:nth-of-type(1){
            width: 18.5rem;
            height: 1.125rem;
            margin: 0.163rem 0;
            font-family: Roboto;
            font-size: 1rem;
            font-weight: normal;
            letter-spacing: -0.39px;
            color: #000;
            height: 1.5rem;
  }
 
            &:nth-of-type(2){
            width: 18.5rem;
            height: 1.125rem;
            margin: 0.150rem 0;
            font-family: Roboto;
            font-size: 1rem;
            font-weight: normal;
            letter-spacing: -0.49px;
            color: #000;
            height: 1.5rem;
        
  }

            &:nth-of-type(3){
            width: 18.5rem;
            height: 1.125rem;
            margin: 0.163rem 0;
            font-family: Roboto;
            font-size: 1rem;
            font-weight: normal;
            letter-spacing: -0.39px;
            color: #000;
}
  }
`

export const Endereco = styled.p`
    width: 25.5rem;
    height: 4.75rem;
    margin: 0.2rem 0;
    padding: 1rem;
    background-color: #eee;
    letter-spacing: -0.39px;
    margin-top: -25px;

    p{
        &:nth-of-type(1){
            width: 18.5rem;
            height: 1.5rem;
            margin: 0.163rem 0;
            font-family: Roboto;
            font-size: 1rem;
            letter-spacing: -0.39px;
            color: #b8b8b8;     
    }
}
`
export const Edit = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    margin: 1rem 1rem 0.125rem 20rem;
    object-fit: contain;
    position: absolute;

  img{
   margin-top: -40px;
  }
`

export const Discricao = styled.div`
 
`

export const Card = styled.div`
  width: 25.5rem;
  height: 6.375rem;
  margin: 0.5rem 0 0;
  padding: 0 0 1rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;

  div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        border-radius: 0 8px 8px 0;
        height: 100%;
        width: 100%;
       
         p{
            &:nth-of-type(1){
            width: 18.5rem;
            height: 1.125rem;
            margin: 0 0 0.563rem;
            font-family: Roboto;
            font-size: 1rem;
            letter-spacing: -0.39px;
            color: #e8222e;
  }
 
            &:nth-of-type(2){
            width: 18.5rem;
            height: 1.125rem;
            margin: 0.163rem 0 0.438rem;
            font-family: Roboto;
            font-size: 0.75rem;
            font-weight: normal;
            
            letter-spacing: -0.29px;
            color: #000;
  }

        &:nth-of-type(3){
            width: 18.5rem;
            height: 1.125rem;
            margin: 0.438rem 0 0;
            font-family: Roboto;
            font-size: 1rem;
            font-weight: bold;
            
            letter-spacing: -0.39px;
            color: #000;
}
  }
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
