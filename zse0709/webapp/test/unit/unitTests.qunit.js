/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"s09/zse0709/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
