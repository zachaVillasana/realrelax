import axios from "axios";

const DPTO_REST_API_URL = "http://localhost:8080/api/findAllDptos?estado=3";

class DptoServices {
  getDptos() {
    return axios.get(DPTO_REST_API_URL);
  }
}
export default new DptoServices();
