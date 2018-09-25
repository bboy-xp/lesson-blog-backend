'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1537881746179_9940';

  // add your config here
  config.middleware = [];

  exports.mongoose = {
    url: 'mongodb://127.0.0.1/lessonBlog',
    options: {}
  };
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ]
  };
  
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  

  return config;
};
