'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getArticle', controller.home.getArticle);
  router.post('/article', controller.home.article);
};
