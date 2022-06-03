const axios = require('axios');

export default class HttpClient {
  toQueryString = json => {
    return (
      '?' +
      Object.keys(json)
        .map(function(key) {
          let objectType;
          if (typeof json[key] === 'object') {
            objectType = JSON.stringify(json[key]);
          } else {
            objectType = encodeURIComponent(json[key]);
          }
          let r = encodeURIComponent(key) + '=' + objectType;
          return r;
        })
        .join('&')
    );
  };
  defaultHeaders = () => {
    return {
      'content-type': 'application/json'
    };
  };

  /**
   * Consulta Http por metodo GET.
   *
   * @param url String de consulta http
   * @param request parametros en formato JSON
   */

  get = async (url, request) => {
    const query = this.toQueryString(request);
    const response = await axios.get(`${url}${query}`);
    return response;
  };

  /**
   * Consulta Http por metodo POST.
   *
   * @param url String de consulta http
   * @param request parametros en formato JSON
   * @param customHeaders Headers custom a la request
   */

  post = async (url, request, customHeaders = {}) => {
    const headers = customHeaders ? customHeaders : this.defaultHeaders();
    const options = {
      method: 'POST',
      headers,
      data: request,
      url
    };
    return await axios(options);
  };
  patch = async (url, request) => {
    const response = axios.patch(url, request);
    return await response;
  };

  delete = async (url) => {
    const response = axios.delete(url);
    return await response;
  };
}
