/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var _ = require('underscore');
var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api'),

};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
  app.get('/catalogue', routes.views.product);
  app.get('/catalogue/:slug', routes.views.product.get);
  app.get('/mycart', routes.views.mycart);
  app.get('/store', routes.views.store);
  app.get('/contact', routes.views.contact);
  app.get('/register', routes.views.register);
  app.get('/account', routes.views.account);
  app.get('/graph/coste', routes.views.graph_coste);
  app.get('/graph/stock', routes.views.graph_stock);


  // API
  app.post('/api/user/create', keystone.middleware.api, routes.api.user.create);
  app.post('/api/user/:id/update', keystone.middleware.api, routes.api.user.update);

  app.get('/api/product/list', keystone.middleware.api, routes.api.products.list);
  app.get('/api/product/:brand/list', keystone.middleware.api, routes.api.products.brand_list);

  app.get('/api/store/list', keystone.middleware.api, routes.api.stores.list);

  app.get('/api/cart', keystone.middleware.api, routes.api.order.get);

  app.post('/api/cart', keystone.middleware.api, routes.api.order.add);
};
