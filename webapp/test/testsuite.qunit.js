sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: com.fal.arabian",
		defaults: {
			page: "ui5://test-resources/com/fal/arabian/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "com/fal/arabian/",
				never: "test-resources/com/fal/arabian/"
			},
			loader: {
				paths: {
					"com/fal/arabian": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for com.fal.arabian"
			},
			"integration/opaTests": {
				title: "Integration tests for com.fal.arabian"
			}
		}
	};
});
