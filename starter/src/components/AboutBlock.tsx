import React from "react";
import { AboutBlockProps } from "../types/types";

const AboutBlock: React.FC<AboutBlockProps> = ({
  preTitle,
  title,
  firstParagraph,
  secondParagraph,
  years,
  slogan,
  imageOne,
  imageTwo,
}) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img">
              <img className="img-fluid" src={imageOne} alt="" />
              <img className="img-fluid" src={imageTwo} alt="" />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h4 className="section-title">{preTitle}</h4>
            <h1 className="display-5 mb-4">{title}</h1>
            <p>{firstParagraph}</p>
            <p className="mb-4">{secondParagraph}</p>
            <div className="d-flex align-items-center mb-5">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary"
                style={{ width: "120px", height: "120px" }}
              >
                <h1 className="display-1 mb-n2" data-toggle="counter-up">
                  {years}
                </h1>
              </div>
              <div className="ps-4">
                <h3>{slogan}</h3>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
