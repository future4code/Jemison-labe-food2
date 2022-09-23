import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToFeedPage } from "../routes/coordinator";

// body: todos os textos do inputs da função Login
// clear: limpar os campos dos inputs
// navigate: conseguir verificar os caminhos

export const getLogin = (body, clear, navigate, setIsLoading) => {
    setIsLoading(true);

    axios
        .post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            clear();
            setIsLoading(false);
            goToFeedPage(navigate);
        })
        .catch((err) => {
            setIsLoading(false);
            alert(err.response.data.message);
        });
};
