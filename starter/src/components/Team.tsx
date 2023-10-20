import React from "react";
import { TeamProps } from "../types/types";

const Team: React.FC<TeamProps> = ({ preTitle, title, teamItems }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h4 className="section-title">{preTitle}</h4>
          <h1 className="display-5 mb-4">{title}</h1>
        </div>
        {teamItems && (
          <div className="row g-0 team-items">
            {teamItems.map(teamMember => (
              <div key={teamMember.id} className="col-lg-3 col-md-6">
                <div className="team-item position-relative">
                  <div className="position-relative">
                    <img className="img-fluid" src={teamMember.avatar} alt="" />
                    <div className="team-social text-center">
                      <a className="btn btn-square" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="bg-light text-center p-4">
                    <h3 className="mt-2">
                      {teamMember.first_name} {teamMember.last_name}
                    </h3>
                    <span className="text-primary">{teamMember.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
