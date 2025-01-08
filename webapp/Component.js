// sap.ui.define(
// 	["sap/ui/core/UIComponent", "sap/ui/model/odata/v4/JSONModel"], //"sap/ui/model/odata/v4/ODataModel"
// 	function (UIComponent ,JSONModel) {
// 		"use strict";

// 		return UIComponent.extend("com.fal.arabian.Component", {
// 			metadata: {
// 				manifest: "json",
// 			},

// 			init: function () {
// 				// Call the base initialization function (UIComponent)
// 				UIComponent.prototype.init.apply(this, arguments);

// 				// Create the OData model to access employee data from the API
// 				// const oModel = new ODataModel({
// 				// 	serviceUrl:
// 				// 		"https://eco-ds-arabian-fal-dev-mc6enm46-dev-ppm-portal-final-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/ContractService/",
// 				// 	//   serviceUrl: "/odata/v4/ContractService/", // Full URL without proxy
// 				// 	synchronizationMode: "None", // Disable synchronization issues
// 				// 	earlyRequests: true, // Optional: fetch data early
// 				// });
// 				const oModel = new sap.ui.model.json.JSONModel("http://localhost:3000/employees");
// 				this.getView().setModel(oModel, "employees");

// 				console.log("Service URL: ", oModel.getServiceUrl()); // Ensure this logs the correct service URL

// 				// Set the OData model globally
// 				this.setModel(oModel);

// 				// Initialize the router (for navigation purposes)
// 				this.getRouter().initialize();
// 			},

// 			createContent: function () {
// 				// Create and return the root view
// 				return sap.ui.view({
// 					viewName: "com.fal.arabian.view.Main",
// 					type: "XML",
// 				});
// 			},
// 		});
// 	}
// );


sap.ui.define(
	["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
	function (UIComponent, JSONModel) {
		"use strict";

		return UIComponent.extend("com.fal.arabian.Component", {
			metadata: {
				manifest: "json",
			},

			init: function () {
				// Call the base initialization function (UIComponent)
				UIComponent.prototype.init.apply(this, arguments);

				// Create the JSON model for employee data
				const oModel = new JSONModel("http://localhost:3000/employees");
				this.setModel(oModel, "employeeModel");

				// Log the model data in the console
				oModel.attachRequestCompleted(function () {
					console.log("Employee Data: ", oModel.getData());
				});

				//   oModel.refresh(true); // لتحديث النموذج بعد تحميل البيانات

				// Initialize the router (for navigation purposes)
				this.getRouter().initialize();
			},

			createContent: function () {
				// Create and return the root view
				return sap.ui.view({
					viewName: "com.fal.arabian.view.Main",
					type: "XML",
				});
			},
		});
	}
);
