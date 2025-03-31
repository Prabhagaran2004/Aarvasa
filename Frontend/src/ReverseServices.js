import React from "react";
import "./ReverseServices.css";

const ReverseServices =({ heading, text, imageSrc}) =>{

    return(
        <div class="revsecomponentone">
            <div class="revseimageone">
                <img src={imageSrc} alt={heading} ></img>
            </div>

            <div class="revsetextforcardone">
                <h4 class="revseheadingone">{heading} </h4>
                <h4 class="revsetextinsideone">{text}</h4>
                <button class="revsereadmoreone">Read More </button>
            </div>
            
        </div>
    )

}
export default ReverseServices;
