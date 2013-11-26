// https://github.com/paypal/rest-api-sdk-nodejs
// description
Package.describe({
	summary: "Package paypal for meteor",
});
Npm.depends({ "paypal-rest-sdk": "0.6.4" });
Package.on_use(function (api) {
	// server
	api.add_files(["server.js"], "server");
	if (typeof api.export !== 'undefined') {
        api.export('PAYPAL_API', "server");
    }
});
