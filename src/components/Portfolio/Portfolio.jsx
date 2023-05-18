import React from "react";
import "./portfolio.scss";
import data from "../../../data";
// import images from "../../assets/images/AlZargar.svg";
import images from "../../assets/images/Al-zargar.svg";
import imagesLogo from "../../assets/images/logoPortfolio.svg";
import imagesLogoMulte from "../../assets/images/multeLogo.svg";
import visited from "../../assets/images/visitedBtn.svg";
import multed from "../../assets/images/multe.svg";

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
        <div className="all_cards">
          <div className="cards">
            <a href="#">
              <div className="titles">
                <h4 className="cards_title">Alzargar</h4>
                <p className="cards_p">Website</p>
              </div>
              <img className="images-main" src={images} alt="" />
              <img className="images" src={imagesLogo} alt="" />
              <a className="visited" href="#">
                Visit
                <img className="vector_vist" src={visited} alt="btn" />
              </a>
            </a>
          </div>
          <div className="middle_card">
            <div>
              <div className="cards_end mb-4">
                <a href="#">
                  <div className="titles_end">
                    <h4 className="cards_title">Alzargar</h4>
                    <p className="cards_p">Website</p>
                  </div>
                  <img className="images-main-end" src={multed} alt="" />
                  <img className="images" src={imagesLogoMulte} alt="" />
                  <a className="visited_end" href="#">
                    Visit
                    <img className="vector_vist_end" src={visited} alt="btn" />
                  </a>
                </a>
              </div>
              <div className="cards_end">
                <a href="#">
                  <div className="titles_end">
                    <h4 className="cards_title">Alzargar</h4>
                    <p className="cards_p">Website</p>
                  </div>
                  <img className="images-main-end" src={multed} alt="" />
                  <img className="images" src={imagesLogoMulte} alt="" />
                  <a className="visited_end" href="#">
                    Visit
                    <img className="vector_vist_end" src={visited} alt="btn" />
                  </a>
                </a>
              </div>
            </div>
            <div>
              <div className="cards_end mb-4">
                <a href="#">
                  <div className="titles_end">
                    <h4 className="cards_title">Alzargar</h4>
                    <p className="cards_p">Website</p>
                  </div>
                  <img className="images-main-end" src={multed} alt="" />
                  <img className="images" src={imagesLogoMulte} alt="" />
                  <a className="visited_end" href="#">
                    Visit
                    <img className="vector_vist_end" src={visited} alt="btn" />
                  </a>
                </a>
              </div>
              <div className="cards_end">
                <a href="#">
                  <div className="titles_end">
                    <h4 className="cards_title">Alzargar</h4>
                    <p className="cards_p">Website</p>
                  </div>
                  <img className="images-main-end" src={multed} alt="" />
                  <img className="images" src={imagesLogoMulte} alt="" />
                  <a className="visited_end" href="#">
                    Visit
                    <img className="vector_vist_end" src={visited} alt="btn" />
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
