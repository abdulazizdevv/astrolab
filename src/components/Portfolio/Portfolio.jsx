import React from "react";
import "./portfolio.scss";
import data from "../../../data";
// import images from "../../assets/images/AlZargar.svg";
import images from "../../assets/images/Al-zargar.svg";
import imagesLogo from "../../assets/images/logoPortfolio.svg";
import imagesLogoMulte from "../../assets/images/multeLogo.svg";
import visited from "../../assets/images/visitedBtn.svg";
import multed from "../../assets/images/multe.svg";
import vectorTop from "../../assets/images/top.svg";

export const Portfolio = () => {
  return (
    <div className="all_portfolio" id="portfolio">
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
          <div className="cards-left">
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
          <div className="cards-right">
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
        <div className="bottom_card">
          <div className="bottom_card_right">
            <div className="cards-right">
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
            <div className="cards-right">
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
          <div className="cards-left">
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
          <div className="cards-right">
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
          <div className="seemore">
            <a href="#">
              See more <img className="top_vector" src={vectorTop} alt="" />
            </a>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};
