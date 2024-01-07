import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Master's of Computer Science
                </h3>
                <span className="qualification__subtitle">
                  Western University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Bachelor's in Information Technology
                </h3>
                <span className="qualification__subtitle">
                  Indus University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Higher Secondary Certificate
                </h3>
                <span className="qualification__subtitle">
                  Nalanda Vidyalaya
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2016 - 2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Secondary School Certificate
                </h3>
                <span className="qualification__subtitle">
                  Kendriya Vidyalaya
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2008 - 2016
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">
                  PM Communications
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Sept 2019 - Apr 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">JAVA Developer</h3>
                <span className="qualification__subtitle">
                  Royal Technosoft
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Mar 2020 - Aug 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UI/Graphic Designer</h3>
                <span className="qualification__subtitle">My Study Buddy</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Nov 2020 - April 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
