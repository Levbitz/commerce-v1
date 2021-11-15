import React from "react";
import { Link } from "react-router-dom";
import AboutImg from "../../../Assets/Images/bg1.jpeg";
import "./MyServices.css";

function MyService() {
  return (
    <>
      <div className="black service_wrapper">
        <div style={{ marginTop: 0 }} className="container">
          <div className="row">
            <div className="col l7">
              <div>
                <p className="orange-text darken-3-text service_para">
                  My Services
                </p>
                <h4 className="white-text service_heading">
                  Build your brand and grow your business
                </h4>
                <p className="white-text">
                  I can give your business a new creative start right away! You
                  can download my resume in order to learn the details of my
                  professional life as a designer and photographer.
                </p>
                <h6 className="white-text">UI/UX Design and Development</h6>
                <h6 className="white-text"> Branding Design and Identity</h6>
                <h6 className="white-text">
                  Mobile App Design Art, Logo, SVG & Illustration
                </h6>
                <h6 className="white-text">3D Modeling & Motion </h6>
                <h6 className="white-text">PSD Design, Photoshop</h6>
                <div>
                  <Link className="white-text">More ==</Link>
                </div>
              </div>
            </div>
            <div className="col l5">
              <div>
                <img height={500} src={AboutImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyService;
