import React from "react";
import './App.css'
import BootsrapButtonExample from "./ClassComponent/BootsrapButtonExample";
import BootsrapCarouselExample from "./ClassComponent/BootsrapCarouselExample";
import BootsrapFormsExample from "./ClassComponent/BootsrapFormsExample";
import BootsraptableExample from "./ClassComponent/BootsraptableExample";
import ClassPropsExamleParent2 from "./ClassComponent/ClassPropsExamleParent2";
import ClassPropsExampleParent1 from "./ClassComponent/ClassPropsExampleParent1";
import BootsrapImages from "./FunctionalComponent/BootsrapImages";
import FunctionalParent from "./FunctionalComponent/FunctionalParent";
// import ClassHeader from './ClassComponent/ClassHeader';
// import FunctionalHeader from "./FunctionalComponent/FunctionalHeader";
// import ClassImageCompnent from "./ClassComponent/ClassImageCompnent";
// import ClassTableComponenent from "./FunctionalComponent/ClassTableComponent";
// import FunctionTable from "./FunctionalComponent/FunctionTable";
// import ClassBasicComponent from "./ClassComponent/ClassBasicComponent";
// import FunctionMenuComponent from "./FunctionalComponent/FunctionMenuComponent";
// import ClassParegrapCompnent from "./ClassComponent/ClassParegrapComponent";

function app(){
        
        return(
        <div className='App'>  
     {/* <BootsrapButtonExample/> */}
     {/* <FunctionalParent/> */}
     {/* <BootsrapFormsExample/> */}
      {/* <BootsraptableExample/> */}
      {/* <BootsrapCarouselExample/> */}
       <BootsrapImages/>
        </div>
        
    )
}
export default app; 