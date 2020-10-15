const { URL } = require('url');

class Generic {
	constructor(path) {
		this.path = path;
		// store the url by combining specific page path with WDIO base url
		// using the NodeJS URL utility
		this.url = new URL(path, browser.options.baseUrl);
}
	load() {
		browser.url(this.path); // navigates to './login', which is passed in below
	}
}
module.exports = Generic;