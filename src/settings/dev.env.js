export const DevEnviroment = {
  production: false,
  apiUrl: process.env.REACT_APP_PUBLIC_API,
  endpointUnauthorized: {
    getToken: 'auth/login'
  },
  endpoint: {
  },
}
