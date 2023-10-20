import React from "react";
import { FeatureBlockProps } from "../types/types";

const FeatureBlock: React.FC<FeatureBlockProps> = ({
  preTitle,
  title,
  firstParagraph,
  imageOne,
  imageTwo,
  uspItems,
}) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <h4 className="section-title">{preTitle}</h4>
            <h1 className="display-5 mb-4">{title}</h1>
            <p className="mb-4">{firstParagraph}</p>
            <div className="row g-4">
              {uspItems.map(item => (
                <div key={item.id} className="col-12">
                  <div className="d-flex align-items-start">
                    <img className="flex-shrink-0" src={item.icon} alt="Icon" />
                    <div className="ms-4">
                      <h3>{item.title}</h3>
                      <p className="mb-0">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-img">
              <img className="img-fluid" src={imageTwo} alt="" />
              <img className="img-fluid" src={imageOne} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBlock;
