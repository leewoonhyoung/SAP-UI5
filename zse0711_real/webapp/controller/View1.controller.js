sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter) {
        "use strict";

        return Controller.extend("sync.zse0711real.controller.View1", {
            onInit: function () {

            },
            onSearch: function (){
                let valCon = this.getView().byId("idVenca").getValue();
                let oTable = this.getView().byId("idTableVen");
                let oFilter = new Filter("Venca","EQ",valCon);
                oTable.getBinding("items").filter(oFilter);
            }
        });
    });
