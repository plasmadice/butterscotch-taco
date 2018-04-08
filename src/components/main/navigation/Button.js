import React from "react";
import "./Button.css"

const Button = ({ onClick, children }) => (
  <div className="search-button">
    <button onClick={onClick}>
      {children}
    </button>
  </div>
)

// used withRouter higher order component to access history

export default Button;