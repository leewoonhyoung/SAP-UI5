sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,  JSONModel, Filter) {
        "use strict";

        return Controller.extend("s09.zse0709.controller.View1", {
            onInit: function () {
                let oData = [
                    {
                        depid: "D001",
                        dname: "FI Team",
                        elist: [
                            { pernr: "20220101", ename: "Kang"},
                            { pernr: "20220103", ename: "Park"}
                        ]
                    },
                    {
                        depid: "D001",
                        dname: "MM Team",
                        elist: [
                            { pernr: "20220102", enmae: "Han"}
                        ]
                    }
                ];


            }
        });
    });
