import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToAddressPage } from "../routes/coordinator";

// body: todos os textos do inputs da função Login
// clear: limpar os campos dos inputs
// navigate: conseguir verificar os caminhos

export const getSignUp = (body, clear, navigate, setIsLoading) => {
    setIsLoading(true);
    axios
        .post(`${BASE_URL}/signup`, body)
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
