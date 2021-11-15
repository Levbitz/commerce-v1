import React from "react";
import "./MainSearchForm.css";

function MainSearchForm() {
  return (
    <>
      <div className="">
        <form className="right parent_formwrap">
          <div className="input-field ">
            <input className="l12" id="search" type="search" required />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons search_icon">search</i>
            </label>
            <i className="material-icons search_icon">close</i>
          </div>
        </form>
      </div>
    </>
  );
}

export default MainSearchForm;
