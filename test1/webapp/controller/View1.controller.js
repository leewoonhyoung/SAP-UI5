sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("test.test1.controller.View1", {
            onInit: function () {
                let oModel = new JSONModel(

                    {   
                        title : "Model Title",
                        datas2 : {
                            name : "Lee"
                        },                        
                        datas: [
                            {name: "lee", age:"28", home:"서울"},
                            {name: "woon  ", age:"28", home:"영등포구"},
                            {name: "hyoung", age:"28", home:"여의도동"}
                            ]
                    }

                );
                this.getView().setModel( oModel, "oModel");


            }
        });
    });
