sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter) {
        "use strict";

        return Controller.extend("pj.zse0720.controller.list", {
            onInit: function () {
            }
            ,
            onSearch: function(){
                let oInput1 = this.getView().byid("idMember1");
                let oInput2 = this.getView().byid("idMember2");
                let sPath1 = "/MEMBERSet( oInput1 )";
                let sPath2 = "/MEMBERSet( oInput2 )";

                oInput1.bindElement( sPath1 );
                oInput2.bindElement( sPath2 );   

                let oTable = this.getView().byid("idTableMem");
                let oFilter = new Filter( oCon1, "BT", oCon2 );
                oTable.getBinding( "items" ).filter(oFilter);

            }
        });
    });
