export default (appInfo: any) => {
  const config: any = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594026551003_9237';

  // add your config here
  config.middleware = [
  ];

  config.security = {
    csrf: {
      enable: false
    }
  };

  config.cors = {
    origin:'*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  return config;
};