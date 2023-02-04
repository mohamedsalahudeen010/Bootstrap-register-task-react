import React from "react"
import ButtonSocial from "./social";
import InputText from "./input";
import {  useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




const MainPage=()=>{
   
    const history=useHistory();
   return(
   <div className="container">   
    <div >
      <img src="https://startbootstrap.com/assets/img/sb-logo.svg" alt='bootstrap'/>
    </div>
    <h3>Sign up on Start Bootstrap</h3>
    <p>Join our community of designers and developers and manage your purchases, favorite themes and snippets, comments, and more!</p>
    <div className='social'>
    <ButtonSocial
    logo={<i class="fa fa-twitter" aria-hidden="true"></i>}
    name={<a 
    href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'
    target={"_blank"} rel="noreferrer">
    Twitter</a>}
    Class={"twitter"}
    Class1={"twitter1"}/>

    <ButtonSocial
    logo={<i class="fa fa-facebook" aria-hidden="true"></i>}
    name={<a href='https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569891%7Cb%7Cfacebook%20signin%7C&placement=&creative=589460569891&keyword=facebook%20signin&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221832%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-3821998899%26loc_physical_ms%3D1007812%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA5sieBhBnEiwAR9oh2jUXFszaoVXFvIrTJKFynpijs86m3--Zue3ohmB-TLsUIeJHzJLUjhoCj-sQAvD_BwE' 
    target={"_blank"} rel={"noreferrer"}
    >Facebook</a>}
    Class={"facebook"}
    Class1={"facebook1"}/>

    <ButtonSocial
    logo={<i class="fa fa-google" aria-hidden="true"></i>}
    name={<a href='https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmyaccount.google.com%2Fdeleteaccount&service=accountsettings&osid=1&rart=ANgoxcfUZ6qfJ80ARx33wMLahmIG0NJPJ1UnOY3ALsuA_xQ1OwBraMC7gtIuY8yp1zBISwvDZc628xhMPvjhUToCAKwVkQLBkg&TL=ALbfvL0VPAD0d_Y8I-O2H4eC1frsiX36olgeoakLzQBqw4Tshup_DP8DRkFNNu74&flowName=GlifWebSignIn&cid=1&flowEntry=ServiceLogin' 
    target={"_blank"} rel={"noreferrer"}
    >Google</a>}
    Class={"google"}
    Class1={"google1"}/>

    <ButtonSocial
    logo={<i class="fa fa-github" aria-hidden="true"></i>}
    name={<a href='https://github.com/login'
    target={"_blank"} rel={"noreferrer"}
    >Github</a>}
    Class={"github"}
    Class1={"github1"}/>
    <hr></hr>
    </div>
    <div>
  <InputText/>
       
  <p>This site is protected by reCAPTCHA and the Google 
    <span><a href='https://policies.google.com/privacy' target={"_blank"}  rel={"noreferrer"}>Privacy Policy 
    </a></span>and <span><a href='https://policies.google.com/terms' target={"_blank"}  rel={"noreferrer"}>Terms of Condition </a></span> apply.</p>
    <hr></hr>
    <div className='footer_Newuser'>
      <p>New user? <button onClick={()=>{history.push("/signup")}}>Create an account ! </button> </p>
    </div>
    </div>
    </div>
    )
}


export default MainPage