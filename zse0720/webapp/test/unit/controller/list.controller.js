/*global QUnit*/

sap.ui.define([
	"pj/zse0720/controller/list.controller"
], function (Controller) {
	"use strict";

	QUnit.module("list Controller");

	QUnit.test("I should test the list controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
