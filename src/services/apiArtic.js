import axios from "axios";

const parametroApiList = {
    baseURL: 'https://api.artic.edu/api/v1'
}

const apiFilmes = axios.create(parametroApiList)

export default apiFilmes;