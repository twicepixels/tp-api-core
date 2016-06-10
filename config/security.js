//Configuración para establecer los parámetros de autenticación
module.exports.security = {
  oauth: {
    version: '2.0',
    token: {
      length: 32,
      expiration: 3600
    }
  }
};
