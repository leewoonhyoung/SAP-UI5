sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("Train.zse0706.controller.View1", {
            onInit: function () {
                let oData={
                    lastName: "Lee"
                };
                let oModel = new sap.ui.model.json.JSONModel();
                oModel.setData( oData );
                this.getView().setModel( oModel );
            },
            onMain: function () {
                let oInpMain = this.getView().byId("inpMain");
                let oInpFrag = this.getView().byId(
                    Fragment.createId("idFragView","inpFrag")
                    );

                alert( oInpMain.getValue());
                alert( oInpFrag.getValue());
            },
            onFrag: function (){
                alert("fragment Button");
                let oInpMain = this.getView().byId("inpMain");
                let oInpFrag = this.getView().byId(
                    Fragment.createId("idFragView", "inpFrag")
                    );

                alert( oInpMain.getValue());
                alert( oInpFrag.getValue());
            },

            onPopup: function (){
                let oView = this.getView();

                if(!this.byId( "idPopup" )){
                    Fragment.load({
                        id: oView.getId(),
                        name: "Train.zse0706.view.Popup",
                        type: "XML",
                        controller: this
                    }).then(
                        function ( oPopup ){
                            oView.addDependent( oPopup );
                            oPopup.open();

                        }
                    );
                } else {
                    this.byId( "idPopup").open();
                    
                }
            },
            onClose: function (){
                this.getView().byId( "idPopup" ).close();
            },

        
        });
    });
