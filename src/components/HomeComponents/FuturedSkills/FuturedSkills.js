import React from "react";
import SkillImg from "../../../Assets/Images/skills.png";
import fileImg from "../../../Assets/Images/file.png";
import fileImgOne from "../../../Assets/Images/file1.png";
import fileImgTwo from "../../../Assets/Images/file2.png";

function FuturedSkills() {
  return (
    <div style={{ paddingTop: 100, paddingBottom: 250 }}>
      <div className="container">
        <div className="row">
          <div className="col l4 ">
            <div style={{ position: "relative" }}>
              <div
                className=""
                style={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  border: "2px white solid",
                  padding: 20,
                  borderRadius: 20,
                }}
              >
                <img height={100} src={fileImg} alt="" />
              </div>
              <div
                className=""
                style={{
                  position: "absolute",

                  top: 0,
                  left: 300,
                  border: "2px white solid",
                  padding: 20,
                  borderRadius: 20,
                }}
              >
                <img height={80} src={fileImgOne} alt="" />
              </div>
              <div style={{ position: "absolute", top: 50, zIndex: "-1" }}>
                <img height={350} src={SkillImg} alt="" />
              </div>
              <div
                className=""
                style={{
                  position: "absolute",
                  top: 350,
                  left: 50,
                  border: "2px white solid",
                  padding: 20,
                  borderRadius: 20,
                }}
              >
                <img height={50} src={fileImgTwo} alt="" />
              </div>
            </div>
          </div>
          <div className="col l5  offset-l2 right">
            <div>
              <p className="">technologies We Use</p>
              <h4 className="">We use the most upto date technologeis </h4>
              <p className="">
                I Specialize in Branding and Strategy, and am passionate about
                creating Awesome Portfolio work. And I always ready to impress
                the audience with my Creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FuturedSkills;
