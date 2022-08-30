import React from "react";

import "./Banner.css";

export default function Banner() {
  return (
    <div className="Banner">
      <header className="Banner__heading">
        <h1 className="italic fw-400">
          <span>
            <img src="/assets/heading-image.png" alt="FloQast" /> The
          </span>
          <span className="text-primary fw-500"> Fastest, Most Accurate</span>{" "}
          Way to Close Your Books!
        </h1>
      </header>

      <div className="Banner__cta">
        <div className="center text-white">
          <h2 className="uppercase">Schedule a demo</h2>
          <p>Learn more about FloQast</p>
        </div>

        <div className="center">
          <p className="fw-600" id="learn-more">
            Learn How FloQast Can
            <span className="text-primary"> Improve You Month-End</span>
          </p>

          <form aria-describedby="learn-more">
            <input type="text" placeholder="First Name*" />

            <input type="email" placeholder="Email*" />

            <button className="uppercase text-white fw-500" type="submit">
              Schedule now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
