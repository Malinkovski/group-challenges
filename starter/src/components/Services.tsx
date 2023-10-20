import React from "react";
import { ServicesProps } from "../types/types";

const Services: React.FC<ServicesProps> = ({ preTitle, title, services }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h4 className="section-title">{preTitle}</h4>
          <h1 className="display-5 mb-4">{title}</h1>
        </div>
        <div className="row g-4">
          {services.map(service => (
            <div key={service.id} className="col-lg-4 col-md-6">
              <div className="service-item d-flex position-relative text-center h-100">
                <img className="bg-img" src={service.image} alt="" />
                <div className="service-text p-5">
                  <img className="mb-4" src={service.icon} alt="Icon" />
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="mb-4">{service.description}</p>
                  <a className="btn" href="">
                    <i className="fa fa-plus text-primary me-3"></i>Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
