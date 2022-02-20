import React from "react";
function Button(props){
    return(
        <button className="button" onClick={props.handleClick}>
          Request Invite
        </button>

    );
}
export default Button