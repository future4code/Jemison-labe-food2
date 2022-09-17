import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToFeedPage } from "../routes/coordinator";

// body: todos os textos do inputs da função Login

// clear: limpar os campos dos inputs

// navigate: conseguir verificar os caminhos

/* export const Login = (body, clear, navigate) => {
    axios
        .post(`${BASE_URL}/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            clear();
            goToFeedPage(navigate);
        })
        .catch((error) => {
            alert(error.response.data.message);
        });
}; */

export const Login = (body, clear, navigate) => {
    axios
        .post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            clear();
            goToFeedPage(navigate);
        })
        .catch((err) => alert(err.response.data.message));
};
