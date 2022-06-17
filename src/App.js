import React from 'react';
import {Navbar }from "./component/Navbar";
import {Select }from "./component/Select";
//import {Photos} from "./component/Photos";
import {Button} from "./component/Button";
import './component/Navbar.css';
//import './component/Photos.css';
import './component/Button.css';
import './component/Select.css';


import './App.css';

 function App(){
   return(
   <div className="container">
   <div className="Logo">
   <img  clasName="omfo" src="/image/logee.png" alt="goapng" />
   <img src="/image/l2.png" alt="goapng" />
   <img src="/image/Goa.png" alt="goapng" />
   </div>
   <form className="Bar">
     <input className="select" type="Search" placeholder="Search" arial-label="What you wants to search"/>
   </form>
   
   <div className="Feedback">
                 <h5 className="Feed">Feedback</h5>
                 <h5 className="Language">English</h5>
                 </div>   
     <Select/>
     <Navbar/>
     <Button/> 
   </div>
   
   );
 }
export default App;
