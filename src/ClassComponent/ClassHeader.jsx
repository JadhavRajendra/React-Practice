
import React from 'react'

class ClassHeader extends React.Component{
    render(){
        return(
            <div className="ClassHeader">
                {/* <h1>This is my class component</h1> */}
                <h1 className='my-heading'>Hello, Rajendra'</h1>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuIAlCMGliS4kIhTRDIGj6qagTLKGw_p6An3M3hGsb5DvNpPv_sdf0B7aU1J0HDufMCmE&usqp=CAU" alt="hi" className="my-pic"/>
            </div>
        )
    }
}

export default ClassHeader;