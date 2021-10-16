import React from "react";
class ClassBasicCompnent extends React.Component{

    render(){
        return(
            <div className="my-basic">

              <h1 classname="my-table"> a basic react table  </h1>
              <tr>
          <th> first name</th>
          <th> last name</th>
          <th> age</th>
          </tr>
          <tr>
              <td> jill</td>
              <td> smith</td>
              <td> 50</td>
          </tr>
          <tr>
              <td> cve</td>
              <td> jackson</td>
              <td> 95</td>
          </tr>
          <tr>
              <td> john</td>
              <td> doe</td>
              <td> 80</td>
          </tr>
            </div>
        );

    }
}
export default ClassBasicCompnent ;