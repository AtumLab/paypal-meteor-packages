// https://github.com/paypal/rest-api-sdk-nodejs
// description
Package.describe({
	summary: "Package paypal for meteor",
	author: "particle4dev@gmail.com"
});
Npm.depends({ "paypal-rest-sdk": "0.5.0" });
Package.on_use(function (api) {
	// server
	api.add_files(["server.js"], "server");
});