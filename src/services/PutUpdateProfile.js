import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

// body: todos os textos do inputs da função Login
// clear: limpar os campos dos inputs
// navigate: conseguir verificar os caminhos

export const putUpdateProfile = (body, clear, setIsLoading) => {
    setIsLoading(true);
    
    axios
        .put(`${BASE_URL}/profile`, body)
        .then((res) => {
            alert("Dados do Perfil atualizado com sucesso");
            clear();
            setIsLoading(false);
        })
        .catch((err) => {
            setIsLoading(false);
            alert(err.response.data.message);
        });
};
