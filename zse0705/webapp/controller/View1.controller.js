sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/Device"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, Device ) {
        "use strict";

        return Controller.extend("sync.zse0705.controller.View1", {
            onInit: function () {

                alert( Device.os.name );

            }

        });
    });
