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
                let oData = {
                    aEmp: [
                        { eNo :"E001", eName:"Lee" },
                        { eNo :"E002", eName:"Han" }
                    ],
                    aSkill: [
                        { sId: "S001", sName: "ABAP",   eNo:"E001" },
                        { sId: "S001", sName: "ABAP" ,  eNo:"E002" },
                        { sId: "S003", sName: "WD4A",   eNo:"E002" },
                        { sId: "S003", sName: "SAPUI5", eNo:"E002" }
                    ]
                };
                /**
                 * model.addAttribute()
                 */
                let oModel = new JSONModel();
                oModel.setData( oData );
                this.getView().setModel(oModel);

            },

            onColumn: function(oEvt){
                let selItem = oEvt.getSource().getBindingContext(); // /aEmp/0
                console.log("oEvt.getSource() ==" + oEvt.getSource());
                console.log("oEvt.getSource().getBindingContext() = " + selItem );

                let oModel = this.getView().getModel();
                console.log("oModel : " + oModel);
                let selEno = oModel.getProperty("eNo", selItem);  // E001    .getProperty("찾으려는 list 속성값", "주소값")
                console.log("selEno : " + selEno);
                let oSkillTable = this.getView().byId("idSkillTable");
                console.log("oSkillTable : " + oSkillTable); //Element sap.m.Table#application-s09zse0709-display-component---View1--idSkillTable

                /**
                * Filter (" ", " ", " ")
                * new sap.ui.model.Filter(vFilterInfo, vOperator?, vValue1?, vValue2?)
                * 
                * Member member = new Member();
                * booleanBuiler(booleanExpression);
                * memberRepository.save(Member);
                */       
                let oFilter = new Filter("eNo", "EQ", selEno ); // 포인터가 있는 ENo 속성 과 같은 값을 가짐.
                console.log("oFilter : " + oFilter);
                oSkillTable.getBinding("items").filter(oFilter); //"idSkillTable의 items를 가져온다. filter() 
            }
        });
    });
