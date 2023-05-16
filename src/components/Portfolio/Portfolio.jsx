import React from "react";
import "./portfolio.scss";

export const Portfolio = () => {
  return (
    <div className="all_portfolio">
      <div className="container">
        <div className="components">
          <h2 className="portfolio_h2">Portfolio</h2>
          <div className="portfolio_btns">
            <button>Website</button>
            <button>Mobile</button>
            <button>CRM</button>
            <button>Branding</button>
          </div>
        </div>
      </div>
    </div>
  );
};
