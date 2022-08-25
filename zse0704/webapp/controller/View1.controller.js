sap.ui.require("sap/m/MessageBox")
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageBox'

], 
    /**
     
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    //TODO  한번더 TEST 하기

    function ( Controller ) {
        "use strict";
        return Controller.extend("VC.zse0704.controller.View1", {

            onInit: function () {

            },

            onClick: function (){
                let oText = this.getView().byId("idLastName");
            

                let lastName = oText.getText();
                alert( lastName );

                alert(
                    this.getView().byId("idFirstName").getText()
                );
            },
            
            onSelect: function () {
                alert(
                this.getView().byId("idCheck").getSelected());
            },

            // onSelect: function() {
            //     if (this.getView.byId('idCheck').getSelected()) {
            //         this.getView.byId('idcheck').setText("Yes");
            //     } else{
            //         this.getView.byId('idcheck').setText("No");
            //     }
            // }

            onSelect: function (){
                let oCheckBox = this.getView().byId("idCheck");
                let bCond  = oCheckBox.getSelected();
                if( bCond ){
                    oCheckBox.setText("Yes");
                } else {
                    oCheckBox.setText("NO");
                }
            },
            onSearch: function(){
                MessageBox.show( "hello", {
                    title: "Title",
                
                });
            }
        });      
    }
);            

    // function ( MessageBox ) {
    //     MessageBox.show(
    //         "This message should appear in the message box.", {
    //             icon: MessageBox.Icon.INFORMATION,
    //             title: "My message box title",
    //             actions: [MessageBox.Action.YES, MessageBox.Action.NO],
    //             emphasizedAction: MessageBox.Action.YES,
    //             onClose: function (oAction) { / * do something * / }
    //         }
    //     );
    // }