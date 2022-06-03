import { DevEnviroment as Enviroment } from "./dev.env"

class ApiSettings {
  constructor() {
    this.API_URL = Enviroment.apiUrl
    this.ENDPOINT_GET_ACCES_TOKEN = Enviroment.apiUrl + Enviroment.endpointUnauthorized.getToken;
    // this.ENDPOINT_EMPLOYEES = this.API_URL + Enviroment.endpoint.employess
  }
}
export default new ApiSettings()
