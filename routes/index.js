var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/gallery', routes.views.gallery);
	app.get('/products/:product', routes.views.product);
	app.get('/products', routes.views.products);
	app.get('/myorders', routes.views.myorders);
	app.get('/myorders/:order', routes.views.order);
	app.get('/cartadd', routes.views.cartadd);
	app.get('/mycart', routes.views.mycart);
	app.get('/purchase', routes.views.purchase);
	app.all('/contact', routes.views.contact);

};
