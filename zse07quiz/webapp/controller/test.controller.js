onInit: function (oComp) {   

    var oModel = new JSONModel();
    this.getView().setModel(oModel);
    // reuse table sample component, but w/o header toolbar
    oComp.setModel(this.getView().getModel());
    this._oTable = oComp.getTable();
    this._oTable.getHeaderToolbar().setVisible(false);
    this.byId("tableLayout").insertContent(this._oTable);
}.bind(this),

onChange: function(oEvent) {
    if ( !this._oTable ) {
        return;
    }
    // getting the value of Combobox
    this._oTable && this._oTable.setShowOverlay(true);
},
onSearch: function(oEvent) {
    if ( !this._oTable ) {
        return;
    }
    var comboBoxValue = this.byId("oComboBox").getValue(),
        oBinding = this._oTable.getBinding("items"),
        oFilter;
    if (comboBoxValue || comboBoxValue === "") {
        this._oTable.setShowOverlay(false);
        oFilter = new Filter("SupplierName", "EQ", comboBoxValue);
        oBinding.filter([oFilter]);
    }
}

"quiz.zse07quiz.controller.quiz"



// test2
sap.ui.define([
    'sap/ui/core/Component',
    'sap/ui/core/Core',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/Filter',
    'sap/ui/model/json/JSONModel',
	"sap/ui/model/FilterOperator"
], 
    function(Component, oCore, Controller, Filter, JSONModel, FilterOperator) {
        "use strict";

        return Controller.extend("quiz.zse07quiz.controller.view1",{

            onInit: function(){
                let oModel = new JSONModel();
                /* this.getView().setModel(oModel); */
            },
            onClick: function( oEvent ){

                var aFilter = [];
                let oData = oEvent.getParameter("selectedItem"); // 값
                let sPath = oData.getBindingContext().getPath(); // 주솟값

                // Table Binding
                let oTable = this.getView().byId("idTable");
                oTable.bindElement( sPath );

                aFilter.push(new Filter("", FilterOperator.Contains, sPath));
                // filter binding
                var oList = this.byId("invoiceList");
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            },
            // table 클릭시
            onTableClick: function( oEvent ){
                let oModel = this.getView().getModel();

                
            },



            

        });
    }
);

        // Component.create({
        //     name : 'quiz.zse07quiz.Table'
        // })
       /* .then(function(oComp)  */