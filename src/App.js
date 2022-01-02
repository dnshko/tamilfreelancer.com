import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div class="marshall-loading-screen">
        <div class="marshall-loading-icon">
          <div class="marshall-loading-inner">
            <div class="marshall-load" data-name="M"></div>
          </div>
        </div>
      </div>

      <div class="marshall-container">
        <div
          class="marshall-bg-overley js-plaxify"
          data-xrange="50"
          data-yrange="25"
        ></div>
        <div class="marshall-col-10 marshall-middle-10 marshall-col-content">
          <div class="marshall-content jquery-center">
            <div class="marhall-maintain-thumb">
              <img
                src="images/v24/workers.png"
                alt=""
                class="js-plaxify"
                data-xrange="10"
                data-yrange="10"
              />
            </div>
            <h2 class="js-plaxify" data-xrange="20" data-yrange="10">
              Coming Soon
            </h2>
            <h4 class="js-plaxify" data-xrange="40" data-yrange="15">
              We'll be back up shortly, Check{" "}
              <a href="https://tamilfreelancer.com/">
                https://tamilfreelancer.com/
              </a>{" "}
              or follow{" "}
              <a href="https://www.linkedin.com/in/dnshko/">@dnshko</a> for
              updates
            </h4>

            <div
              class="simple-logo js-plaxify"
              data-xrange="50"
              data-yrange="20"
            >
              <img src="images/logo-dark.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
