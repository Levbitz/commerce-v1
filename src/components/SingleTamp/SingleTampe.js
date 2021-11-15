import React from "react";

import "./SingleTampe.css";

function SingleTampe({
  Img,
  heading,
  Demo,

  children,

  simpleDescription,
  icon,
}) {
  return (
    <div>
      <div class="col l3 s12 m6 ">
        <div style={{ borderRadius: 20 }} class="card   p-box ">
          <div class="card-image">
            <img
              style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
              src={Img}
              alt="img"
            />
            <span className="card-title back">{heading}</span>
            <i class="btn-floating halfway-fab waves-effect waves-light cyan darken-4">
              <i className="material-icons">{icon}</i>
            </i>
          </div>
          <div class="card-content">
            <p className="truncate">{simpleDescription}...</p>
            <div className="center">
              {/*<div>
                <p className="btn z-depth-0">
                  <a className="white-text" href={Demo}>
                    Preview
                  </a>
                </p>
              </div>*/}

              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleTampe;
