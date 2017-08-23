var _ = require('lodash');


/**
	Initialises the standard view locals
*/
exports.initLocals = function (req, res, next) {

	var locals = res.locals;

	locals.navLinks = [
		{ label: 'Home', key: 'home', href: '/' },
		{ label: 'Blog', key: 'blog', href: '/blog' },
		{ label: 'Gallery', key: 'gallery', href: '/gallery' },
		{ label: 'Store', key: 'store', href: '/products' },
		//{ label: 'My Orders', key: 'myorders', href: '/myorders' },
		{ label: 'Contact', key: 'contact', href: '/contact' }
	];

	//res.locals.user = req.user;
	if(req.user) locals.navLinks.push({label: 'My Orders', key: 'myorders', href: '/myorders'});
	locals.user = req.user;
	if(req.session.cart == undefined) req.session.cart = [];
	res.locals.sumcount = 0;
	req.session.cart.forEach(function(item){
		res.locals.sumcount += item.product.price*item.product.quantity;
	});

	next();
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
