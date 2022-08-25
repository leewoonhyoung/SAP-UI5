sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("list.zse07hw.controller.list", {
            onInit: function () {
                let oData = {
                    lastName : "Lee" ,
                    oDep : {depId: "D001", dName : "SAPUI"},
                    selKey:"S02",
                    aSkill: [
                        {sId: "S01", sName: "ABAP"},
                        {sId: "S02", sName: "SAPUI"},
                        {sId: "S03", sName: "WD4A"},
                        {sId: "S04", sName: "Fiori"}
                    ]
                };

                let oModel = new JSONModel();
                oModel.setData( oData );
                this.getView().setModel( oModel );

                let oData2 = {
                    firstName :  "SK"
                };

                let oModel2 = new JSONModel();
                oModel2.setData( oData2 );
                this.getView().setModel( oModel2, "myModel" );

            },
            onSearch: function(){
                let oInput = this.getView().byId( "idInput");
                let inpValue = oInput.getValue();
                let oModel = this.getView().getModel();
                let oData = oModel.getData(); 
                console.log(oData);
                

            },
            onSelect: function ( oEvt ){
                let selkey = this.getValue().byId( "idCombo" ).getSelectedKey();
                console.log("onSelect was Complete");
            }
        });
    }
);
