import React from "react";
import "./TechsContent.css";

function TeachsContent() {
  return (
    <>
      <div className="container">
        <section className="tech__notes">
          <h5>Building a website for free</h5>
          <p>
            A website is a collection of web pages. If you are a web designer or
            a web developer, you must be already aware of the three key
            components required to build web pages. If you are new to this, let
            us clear the air.
          </p>
          <p>For creating a web page following are the three key components:</p>

          <ul>
            <li>Hypertext Markup Language – HTML</li>
            <li>Cascading Style Sheets – CSS</li>
            <li>JavaScript – JS.</li>
          </ul>
          <p>
            HTML handles all the structure of the document. Basically, the flow
            of information on your page.
          </p>
          <p>
            CSS defines the presentation of the structure, How your page looks?
          </p>
          <p>
            And, JS handles all the interactions. The interactions between your
            customers and the website.
          </p>
          <p>
            And, in order to grab the attention of your visitors, you must make
            every web page as interesting as possible. And, if you are hungry
            for inspiration, cluelessly roaming around the internet looking for
            the most perfect design, your search will end here.
          </p>

          <h5>Techonologies Used At Levbitz</h5>
          <p>
            In Addition to plain Javascript(js), at Levbitz we use some
            libraries and frame work to create beautiful UI designs
          </p>

          <div>
            <div className="row">
              <div className="col l6 s12">
                <h5>React</h5>
                <p>A JavaScript library for building user interfaces</p>
                <p>
                  React makes it painless to create interactive UIs. Design
                  simple views for each state in your application, and React
                  will efficiently update and render just the right components
                  when your data changes.
                </p>
              </div>
              <div className="col l6 s12">
                <h5>Angular Js</h5>
                <p>
                  AngularJS is a JavaScript-based open-source front-end web
                  framework mainly maintained by Google and by a community of
                  individuals and corporations to address many of the challenges
                  encountered in developing single-page applications
                </p>
              </div>
            </div>
          </div>

          <h5>Vue Js</h5>
          <p>
            Vue.js is an open-source model–view–viewmodel front end JavaScript
            framework for building user interfaces and single-page applications.
            It was created by Evan You, and is maintained by him and the rest of
            the active core team members
          </p>

          <h5>Next Js</h5>
          <p>The React Framework for Production</p>
          <p>
            Next.js gives you the best developer experience with all the
            features you need for production: hybrid static & server rendering,
            TypeScript support, smart bundling, route pre-fetching, and more. No
            config needed.
          </p>

          <h5>Gatsby</h5>
          <p>The static dynamic site generator for dynamic web developers.</p>
          <p>
            Gatsby provides development teams an open source frontend framework
            for creating dynamic, optimized websites and a cloud platform for
            delivering them on a blazing fast edge network.
          </p>
          <h5>Bootstrap</h5>
          <p>Build fast, responsive sites with Bootstrap</p>
          <p>
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>

          <h5>Tailwind Css</h5>
          <p>Rapidly build modern websites without ever leaving your HTML.</p>
          <p>Rapidly build modern websites without ever leaving your HTML.</p>

          <h5>Material UI</h5>
          <p>
            React components for faster and easier web development. Build your
            own design system, or start with Material Design.
          </p>
          <p>
            Material Design is a design language developed by Google in 2014.
            Expanding on the "cards" that debuted in Google Now, Material Design
            uses more grid-based layouts, responsive animations and transitions,
            padding, and depth effects such as lighting and shadows.
          </p>

          <h5>Materialize</h5>
          <p>
            A modern responsive front-end framework based on Material Design
          </p>

          <h5>Bulma</h5>
          <p>Bulma: the modern CSS framework that just works.</p>
          <p>
            Bulma is a free, open source framework that provides ready-to-use
            frontend components that you can easily combine to build responsive
            web interfaces.
          </p>
        </section>
      </div>
    </>
  );
}

export default TeachsContent;
