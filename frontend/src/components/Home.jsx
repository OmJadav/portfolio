import React from "react";
import Typewriter from "typewriter-effect";
export const Home = () => {
  const roles = ["Mern Stack Developer", "Programmer 😎"];
  return (
    <div id="#home">
      <main>
        <section className="firstSection ">
          <div className="leftSection">
            <div> Hi, My Name is </div>
            <span className="orange main-words">Om Jadav</span>.
            <div>I am a passionate</div>
            <div className="orange ">
              <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="buttons">
              <button className="btn">Download Resume</button>
              <button className="btn">GitHub</button>
            </div>
          </div>
          <div className="rightSection">
            {/* <Logo /> */}
            <img src="bg_new.png" alt="hero image" />
          </div>
        </section>
        <hr />
      </main>
    </div>
  );
};
