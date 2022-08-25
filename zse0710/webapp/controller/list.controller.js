sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("std.zse0710.controller.list", {
            onInit: function () {

                let oModel = new JSONModel();
                oModel.loadData( "../model/data.json");
                this.getView().setModel( oModel );
            },

            onRow: function( oEvent ){
                let path = oEvent.getParameter("rowContext").getPath();
                let table = this.getView().byId( "idTableConn");
                table.bindElement( path );
            }
        });
    });
