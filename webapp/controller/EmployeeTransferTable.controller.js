sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";

	return Controller.extend("com.fal.arabian.controller.EmployeeTransferTable", {
		onInit: function () {
      const oTable = this.byId("employeeTable");
  
      // Get the model from the component and set it
      const oModel = this.getOwnerComponent().getModel("employeeModel");
  
      // Check the data in the console
      console.log(oModel.getData()); // Print the model data
  
      // Ensure that data is loaded correctly and set the model to the table
      if (oModel.getData().employees && oModel.getData().employees.length > 0) {
          oTable.setModel(oModel); // Set the model to the table
      } else {
          console.error("No data available in the model.");
      }
  
      // Bind the table to the Employee entity set
      oTable.bindItems({
          path: "employeeModel>/employees", // Path for employees
          template: new sap.m.ColumnListItem({
              cells: [
                  new sap.m.Text({ text: "{employeeModel>employeeId}" }),
                  new sap.m.Text({ text: "{employeeModel>firstName}" }),
                  new sap.m.Text({ text: "{employeeModel>lastName}" }),
                  new sap.m.Text({ text: "{employeeModel>workCenter_ID}" }),
                  new sap.m.Text({ text: "{employeeModel>costCenter_ID}" })
              ]
          })
      });
  }
,  

		// onNextPress: function () {
		//   // Handle the Next button press
		//   sap.m.MessageToast.show("Next button pressed");
		// }
	});
});
