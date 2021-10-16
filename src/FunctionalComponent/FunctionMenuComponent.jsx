import "./FunctionMenuComponent.css";

const FunctionMenuComponent = () =>{
return(
    <div className="my-menu">
        <title > Drop-down Menu desing-Easy Tutorials</title>
         <link rel="stylesheet" href="style.css"/>
        
            
                <ul >
                <li class="active"><a href="#"> <i class="fa fa-home"></i> Home </a> </li>
                <li><a href="#"> <i class="fa fa-user"> </i>about us </a> </li>
                <div class="sub-menu-1">
                <ul>
                <li><a href="#">mission</a></li>
                <li><a href="#"> vission</a></li>
                <li><a href="#"> team</a></li>
                </ul>
                </div>
                <li><a href="#"><i class="fa fa-clone"></i>Services</a></li>
                <li><a href="#"><i class ="fa fa-user's"></i>clients</a></li>
                <li><a href="#"><i class="fa fa-angellist"></i>Invester</a></li>
                <li><a href="#"> <i class="fa fa-inr"></i>Pricing</a></li>
                <li><a href="#"><i class="fa fa-edit"></i>training</a></li>
                <li><a href="#"> <i class="fa fa-phone"> </i>contact</a></li>
                </ul>
             
    
    </div>
)
}
export default FunctionMenuComponent;
    
