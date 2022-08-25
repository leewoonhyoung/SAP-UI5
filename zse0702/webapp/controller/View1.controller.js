sap.ui.define(
    [ 
        "sap/ui/core/mvc/Controller", 
        //추가 MessageBox
        "sap/m/MessageBox"
    ],
    function ( Controller, MessageBox ){ 
        return Controller.extend(
            "sync.zse0502.controller.View1",
            {
                onInit: function( ) {

                },
                onClick: function ( ){
                    MessageBox.show(
                        "Mesg1", {
                            title: "Title1"
                        }
                    );
                //  alert("test");
                  sap.m.MessageBox.show(
                      "Mesg2", { 
                            title: "title2"
                      }
                  );
                }
            }
        );
    }
);
