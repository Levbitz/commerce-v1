import React from "react";
import TopOne from "../../helpers/curves/TopOne";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <TopOne />
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Footer Content</h5>
              <p class="grey-text text-lighten-4">
                We help developers, designers and website owner's create
                stunning websites. We have been building a huge collection of
                website templates for every business and industry needs. Simply
                select your favourite template, edit, download and launch 🚀
              </p>
            </div>
            <div class="col l3  s6  offset-l3">
              <h5 class="white-text">Links</h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Join our team
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Licences
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Faqs
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            Levbitz ,Inc Copyright ©2021
            <a class="grey-text text-lighten-4 right" href="#!">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
