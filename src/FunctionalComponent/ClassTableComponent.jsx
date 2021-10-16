
import React from "react";

    class ClassTableComponent extends React.Component {
        render() {
            
            return (
                <div className="my-form" >
                    <h1 className="my-size"> this is form </h1>
                    <boby>
                        <form name="tablegen">
                            <lable> ports: <input type ="text" name ="ports" id="ports"/> </lable><br/>
                            <lable> super columns: <input type="text" name="super"id="super"/> </lable><br/>
                            <label> Rows: <input type ="text" name= "Rows" id="rows"/></label><br/>
                            <lable>columns: <input type ="text" name="cols" id="cols"/> </lable><br/>
                        
                        </form>
                        <div id="wrapper"></div>
                    </boby>
                </div>
            );
        }
    }
      
    
            
        
    
      
    export default ClassTableComponent;