/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"std/zse0710/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
