import React from "react";
import { Link } from "react-router-dom";
import "./SingleTampe.css";
import Banner from "../../Assets/Images/bb.png";

function PreSingleTampe({ heading, Img, simpleDescription, source, myLink }) {
  return (
    <div>
      <Link to={myLink}>
        <div
          style={{
            margin: "auto",
            alignItems: "center",
          }}
          class="col l4 s12 m6 center "
        >
          <div
            style={{ borderRadius: 10 }}
            className="card   p-box z-depth-0  center"
          >
            <div class="card-image">
              <img
                className="responsive-img"
                style={{ borderRadius: 10, height: 220 }}
                // src="https://levbitz.com/assets/images/blog1.svg"
                src={source}
                alt="img"
              />
              <p
                className="center"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "300",
                  color: "#373f50",
                  marginTop: 10,
                }}
              >
                {heading}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PreSingleTampe;
