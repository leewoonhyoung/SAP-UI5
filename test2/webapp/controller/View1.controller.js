sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("test2.test2.controller.View1", {
            onInit: function () {

                var oData={
                    recipient :{
                        name : "UI5"
                    }
                };

                var oModel = new JSONModel( oData );
                this.getView().setModel( oModel );

            },
            onShowHello : function(){
                MessageToast.show("Hello There!");
            }
        });
    });
