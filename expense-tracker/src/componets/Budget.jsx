import React, { useContext } from "react";
import { AppContext } from "../assets/AppContext";



function Budget() {
  const {budget} = useContext(AppContext);
  return (
    <div className="alert alert-secondary">
        <span>Budget: GHC{budget}</span>
    </div>
  )
}

export default Budget;