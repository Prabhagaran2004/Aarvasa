import React from "react";
import "./CompanyPartners.css"; 

const CompanyPartners = ({ partners }) => {
  return (
    <div>
      <div className="partners-containerabove">
        <h2>Company Partners :</h2>
      </div>
      <div className="partners-container">
        <div className="partners-logos">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <img src={partner.logo} alt={`${partner.name} logo`} />
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyPartners;
