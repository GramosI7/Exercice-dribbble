import React from "react";

const SousNav = () => {
    return (
        <div>
             <div className="sous_nav">
            <h6 className="align-center ">
                What are you working on? Dribbble is where designers get inspired and hired.
            </h6>
            <button type="button" class="btn btn-primary">Primary</button>
            <br/>
            <br/>
            <div className="sous_nav_sous">
                <p>
                    Looking to hire a designer? Learn more
                </p>
                </div>
                </div>
                
                <div className="en_dessous">
                <ul class="nav justify-content-center">
                <li class="nav-item">
                <a class="nav-link" href="#">Popular</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Shot</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Now</a>
  </li>
 
</ul>
                </div>
   
        
        </div>
       
    )
}

export default SousNav;