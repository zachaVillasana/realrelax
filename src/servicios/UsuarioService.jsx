import axios from "axios";
const REG_USUARIO_REST_API_URL= 'http://localhost:8080/api/findAllDptos?estado=3';

class UsuarioService(){
    regUsuarios(){
        return axios.post(REG_USUARIO_REST_API_URL);
    }
}
export default new suarioService();