/*global QUnit*/

sap.ui.define([
	"quiz/zse07quiz/controller/quiz.controller"
], function (Controller) {
	"use strict";

	QUnit.module("quiz Controller");

	QUnit.test("I should test the quiz controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
