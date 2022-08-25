sap.ui.define( 
    [
        "sap/m/MessageBox"
    ],
    function( MessageBox ){
        return{ 
            reportMesg: function(pMseg, pTitle){
                MessageBox.show( pMsg, {
                    title: pTitle
                });
                
            }
        };
    }

);
