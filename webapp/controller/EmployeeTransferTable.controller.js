sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("com.fal.arabian.controller.EmployeeTransferTable", {
      onInit: function () {
          const oTable = this.byId("employeeTable");

          // Get the model from the component
          const oModel = this.getOwnerComponent().getModel("employeeModel");

          // Log the model data in the console when the data is fully loaded
          oModel.attachRequestCompleted(function () {
              console.log("Employee Data: ", oModel.getData());

              // Bind the table only after data is fully loaded
              oTable.setModel(oModel);

              // Now bind the table to the employee data
              oTable.bindItems({
                  path: "employeeModel>/",  // Correct path to the employee array
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
          });
      }
  });
});
