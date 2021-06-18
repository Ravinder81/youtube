
import React, { useState } from "react";


const BoysData = () => {
  const [ fullname,setfullname] = useState("Hello Viewers welcome back to the new video and In today video we will see  'Charts In Oracle APEX'");
  const [ctext, setext] = useState("Thanks for watching video till the end please Like👍 share🚀 and comment✍️ Take A Minute To Follow Me On Social Media");
  



  const changed =() => {
    setfullname(ctext);
  }
  

  return (
    <>
    {/* <body> */}
    {/* <div className="main_div"> */}
  
    <div class="br-card">
  <div class="front">
    <div class="content">
      <div class="d-flex"><span class="br-avatar large" title="Fulana da Silva"><span class="image"><img src="https://lh3.googleusercontent.com/a-/AOh14GiubR13GgBqyroQ-iQDiMDJUq0UANKkn4D9VFzn=s600-k-no-rp-mo" alt="Avatar"/></span></span>
        <div class="flex-fill ml-3">
          <div class="br-textarea">
          </div>
        </div>
      </div>
    </div>
 

  </div>
</div>
    
    <h1>Welcome To Tech Probie </h1>
    <h3> {fullname} </h3>
      {/* <input type="text" placeholder="enter text" onChange={inputEvent}  value={ctext}/> */}
      <button onClick={changed}>Switch</button>
      <div>
    <div class="hero">
      

      <div class="social-links">
        <a href="https://www.facebook.com/ravindra.thapliyal.16 " target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/mr.thapliyal/"target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://twitter.com/RavinderThapli4"target="_blank"><i class="fab fa-twitter"></i></a>
        {/* <a href=""><i class="fab fa-github"></i></a> */}
        <a href="https://www.linkedin.com/in/%E2%AD%90-ravindra-thapliyal-19b761120/"target="_blank"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>
    {/* </div> */}
    {/* </body> */}
    </>
  );
};
export default BoysData;
