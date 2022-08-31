sap.ui.define([
    'sap/ui/core/Component',
    'sap/ui/core/Core',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/Filter',
    'sap/ui/model/json/JSONModel'
], function(Component, oCore, Controller, Filter, JSONModel) {
"use strict";

var TableController = Controller.extend("quiz.zse07quiz.controller.view1", {

    onInit: function() {
        // Component.create({
        //     name : 'quiz.zse07quiz.Table'
        // })
        // .then(function(oComp) {
        //     debugger;
        //     var oModel = this.getOwnerComponent().getModel();
        //     this.getView().setModel(oModel);
        //     oComp.setModel(this.getView().getModel());
        //     let oTable = oComp.getTable();
        // }.bind(this));
    },

    onChange: function(oEvent) {
        if ( !this._oTable ) {
            return;
        }
        // getting the value of Combobox
        this._oTable && this._oTable.setShowOverlay(true);
    },
    onSearch: function(oEvent) {
        var comboBoxValue = this.byId("oComboBox").getValue();
        var oBinding = this.byId("idTable").getBinding("items");
        var oFilter = new Filter( "Syear" , "EQ", comboBoxValue);
            oBinding.filter([oFilter]);
        
    }
});
    return TableController;

});
