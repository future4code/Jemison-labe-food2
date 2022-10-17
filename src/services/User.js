import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToFeedPage, goToProfilePage } from "../routes/coordinator";
import { goToAddressPage } from "../routes/coordinator";

// body: todos os textos do inputs da função Login
// clear: limpar os campos dos inputs
// navigate: conseguir verificar os caminhos
// setIsLoading: carregar loading enquanto aguarda a requisição

// Este endpoint realiza o login de um usuário já cadastrado.
export const postLogin = (body, clear, navigate, setIsLoading) => {
   setIsLoading(true);

   const endpoint = {
      method: "post",
      url: `${BASE_URL}/login`,
      headers: { auth: localStorage.getItem("token") },
      data: body,
   };

   axios(endpoint)
      .then((res) => {
         localStorage.setItem("token", res.data.token);
         clear();
         setIsLoading(false);
         goToFeedPage(navigate);
      })
      .catch((err) => {
         setIsLoading(false);
         // alert(err.response.data.message);
         alert("Faça o login para acessa");
      });
};

// Este endpoint realiza o cadastro de um novo usuário.
export const postSignUp = (body, clear, navigate, setIsLoading) => {
   setIsLoading(true);

   const endpoint = {
      method: "post",
      url: `${BASE_URL}/signup`,
      headers: { auth: localStorage.getItem("token") },
      data: body,
   };

   axios(endpoint)
      .then((res) => {
         localStorage.setItem("token", res.data.token);
         alert("Cadastro efetuado com sucesso!");
         clear();
         setIsLoading(false);
         goToAddressPage(navigate);
      })
      .catch((err) => {
         setIsLoading(false);
         alert(err.response.data.message);
      });
};

// Este endpoint realiza o cadastro ou a edição do endereço de um usuário.
export const putAddAddress = (body, clear, navigate, setIsLoading) => {
   setIsLoading(true);

   const endpoint = {
      method: "put",
      url: `${BASE_URL}/address`,
      headers: { auth: localStorage.getItem("token") },
      data: body,
   };

   axios(endpoint)
      .then((res) => {
         localStorage.setItem("token", res.data.token);
         alert("Seu endereço foi salvo!");
         clear();
         setIsLoading(false);
         goToFeedPage(navigate);
      })
      .catch((err) => {
         setIsLoading(false);
         alert(err.response.data.message);
      });
};

// Este endpoint realiza o cadastro ou a edição do endereço de um usuário.
export const getFullAddress = (body, clear, navigate, setIsLoading) => {
   setIsLoading(true);

   const endpoint = {
      method: "get",
      url: `${BASE_URL}/profile/address`,
      headers: { auth: localStorage.getItem("token") },
      data: body,
   };

   axios(endpoint)
      .then((res) => {
         localStorage.setItem("token", res.data.token);
         alert("Seu endereço foi salvo!");
         clear();
         setIsLoading(false);
         goToProfilePage(navigate);
      })
      .catch((err) => {
         setIsLoading(false);
         alert(err.response.data.message);
      });
};

// Este endpoint atualiza as informações do usuário. Deve ser usado na tela de edição de perfil.
export const putUpdateProfile = (body, clear, setIsLoading) => {
   setIsLoading(true);

   const endpoint = {
      method: "put",
      url: `${BASE_URL}/profile`,
      headers: { auth: localStorage.getItem("token") },
      data: body,
   };

   axios(endpoint)
      .then((res) => {
         alert("Dados atualizados com sucesso!");
         clear();
         setIsLoading(false);
      })
      .catch((err) => {
         setIsLoading(false);
         alert(err.response.data.message);
      });
};

// Este endpoint realiza um pedido. Ele recebe um array de products, que devem conter somente o id de um product e quantidade que será pedida. Além disso, o método de pagamento deve ser informado.
export const postPlaceOrder = (body, id) => {
   const endpoint = {
      method: "post",
      url: `${BASE_URL}/restaurants/${id}/order`,
      headers: { auth: localStorage.getItem("token") },
      data: body,
   };

   axios(endpoint);
};

// Este endpoint retorna o pedido ativo do usuário. Se ele não possuir nenhum pedido ativo, retorna null.
export const getActiveOrder = () => {
   const endpoint = {
      method: "get",
      url: `${BASE_URL}/restaurants/active-order`,
      headers: { auth: localStorage.getItem("token") },
   };

   axios(endpoint);
};
