import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToFeedPage } from "../routes/coordinator";

// body: todos os textos do inputs da função Login
// clear: limpar os campos dos inputs
// navigate: conseguir verificar os caminhos

export const putAddAdress = (body, clear, navigate, setIsLoading) => {
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
