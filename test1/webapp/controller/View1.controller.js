sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/viz/ui5/data/FlattenedDataset"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter, FlattenedDataset) {
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
                            {name: "lee", age:"28", home:"서울", price:5000},
                            {name: "woon  ", age:"17", home:"영등포구", price:51000},
                            {name: "hyoung", age:"3", home:"여의도동", price:501400}
                            ]
                    }

                );
                this.getView().setModel( oModel, "oModel");
                this._setLineChart();


            },
            _setLineChart: function(){
                var oData ={
                    chartDatas : [
                    {name : "aaa", price:"37"},
                    {name : "bbb", price:"374"},
                    {name : "ccc", price:"327"},
                    {name : "ddd", price:"137"},
                    ]
                };

                var oLineName = new JSONModel( oData );
                var oVizFrame = this.getView().byId("idLineChart");
                oVizFrame.setModel( oLineName );

                var oDataSet = new FlattenedDataset({   
                    dimensions :[
                        {name:"Name", value:"{name}"}
                    ],

                    measures :[
                        {name: "Price", value:"{price}"}
                    ],

                    data : {path: "/chartDatas"}
                });
                
                oVizFrame.setVizProperties({
                    title : {text: "Sales Data"},
                    legend: {'visible' : true},
                    plotArea:{
                        drawingEffect: "glossy",
                        dataLabel : {visible : false }
                    }
                });

            },
            OnInputSubmit : function( oEvent ){
                let oInput = this.byId("InputId").getValue();
                let oFilter = new Filter("name", "EQ", oInput);

                this.byId("Table1").getBinding("rows").filter( oFilter );
            },
            onRowSelectionChange: function(){
                var oModel = this.getView().byId();
            }
        });
    });
