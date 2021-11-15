import React from "react";
import { Link } from "react-router-dom";
import MainSearchForm from "../../MainSearchForm/MainSearchForm";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        background: "#064757",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 40,
      }}
    >
      <div
        className="nav_container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 50,
        }}
      >
        <h4 style={{ alignSelf: "center" }} className="white-text center ">
          <Link to="/">
            <img
              className="logo"
              src="https://code.levbitz.com/static/media/logo.a43ee106.png"
              alt=""
            />
          </Link>
        </h4>
        <Sidebar />
        <h6
          style={{ alignSelf: "center", marginRight: 20, marginLeft: 20 }}
          className="white-text hide-on-med-and-down"
        >
          |
        </h6>
        <h6
          className="hide-on-med-and-down"
          style={{ alignSelf: "center", marginRight: 20 }}
        >
          <Link
            className="white-text "
            style={{ fontSize: "14px", fontWeight: "bold" }}
            to="/"
          >
            Home
          </Link>
        </h6>
        <h6
          className="hide-on-med-and-down"
          style={{ alignSelf: "center", marginRight: 20 }}
        >
          <Link
            className="white-text "
            style={{ fontSize: "14px", fontWeight: "bold" }}
            to="/"
          >
            Blog
          </Link>
        </h6>
        <h6
          className="hide-on-med-and-down"
          style={{ alignSelf: "center", marginRight: 20 }}
        >
          <Link
            className="white-text "
            style={{ fontSize: "14px", fontWeight: "bold" }}
            to="/"
          >
            Faqs
          </Link>
        </h6>
      </div>

      <div className="hide-on-med-and-down">
        <MainSearchForm />
      </div>
      <div>
        <i style={{ fontSize: 35 }} class="large material-icons white-text">
          account_box
        </i>
      </div>
    </div>
  );
}

export default Navbar;
