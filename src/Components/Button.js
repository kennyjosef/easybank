import React from "react";
import { Link } from "react-router-dom";
function Button(props){
    return(
      <Link to='/Signup'>
        <button className="button" onClick={props.handleClick}>
          Request Invite
        </button>
      </Link>

    );
}
export default Button