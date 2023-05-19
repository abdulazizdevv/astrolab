import { Component } from "react";
import Slider from "react-slick";
import "./carousel.scss";

import beeline from "../../assets/images/beeline.svg";
import ucell from "../../assets/images/ucell.svg";
export default class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false,
    };
    return (
      <div className="client_box">
        <div className="">
          <h2 className="container clients">Clients & Partners</h2>
          <Slider {...settings}>
            <div>
              <div className="card_clients">
                <img src={beeline} alt="" />
              </div>
            </div>
            <div>
              <div className="card_clients">
                <img src={ucell} alt="" />
              </div>
            </div>
            <div>
              <div className="card_clients">
                <img src={beeline} alt="" />
              </div>
            </div>
            <div>
              <div className="card_clients">
                <img src={beeline} alt="" />
              </div>
            </div>
            <div>
              <div className="card_clients">
                <img src={beeline} alt="" />
              </div>
            </div>
            <div>
              <div className="card_clients">
                <img src={ucell} alt="" />
              </div>
            </div>
            <div>
              <div className="card_clients">
                <img src={beeline} alt="" />
              </div>
            </div>
            <div>
              <div className="card_clients">
                <img src={ucell} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
