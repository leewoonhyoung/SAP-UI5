sap.ui.jsview( 
    "VC.zse0704.view.jsview",
    {
        getControllerName: function (){
            return "VC.zse0704.controller.jsview";
        },

        onClick: function (){
            alert("this Method");

        },

        createContent: function ( oController ){
            let oBtn = new sap.m.Button({
                text: "JS Button",
                press: oController.onClick
            });

            let oBtn2 = new sap.m.Button("idBtn2",{
                text: "JS Button2",
                press: function(){
                    alert("Self Method");
                }
            });

            let oBtn3 = new sap.m.Button({
                text: "JS Btn3",
                press: this.onClick
            })
            
            return [oBtn, oBtn2, oBtn3];
        }
    }
);