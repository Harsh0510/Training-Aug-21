import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="banner">
        <img
          src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210089/reliance/banner/banner-1_te9i4w.jpg"
          alt="banner"
          className="img-fluid"
        />
        <div className="sliderbanner">
          <Slider {...settings}>
            <img
              src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210089/reliance/banner/banner-2_n74kbb.jpg"
              alt="banner"
            />
            <img
              src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210089/reliance/banner/banner-3_gtmbgo.jpg"
              alt="banner"
            />
            <img
              src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210090/reliance/banner/banner-4_dejxsn.jpg"
              alt="banner"
            />
            <img
              src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210089/reliance/banner/banner-5_tpzevv.jpg"
              alt="banner"
            />
            <img
              src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210090/reliance/banner/banner-6_on33ne.jpg"
              alt="banner"
            />
            <img
              src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210090/reliance/banner/banner-7_r5iyke.jpg"
              alt="banner"
            />
            <img
              src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210090/reliance/banner/banner-8_dqxdma.jpg"
              alt="banner"
            />
            <img
              src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210090/reliance/banner/banner-9_yzhr3a.jpg"
              alt="banner"
            />
            <img
              src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210090/reliance/banner/banner-10_gjpgqe.jpg"
              alt="banner"
            />
          </Slider>
        </div>
        <div className="featuredoffer">
          <h4 className="my-4 mx-4">FEATURED OFFERS ON LATEST TECHNOLOGY</h4>
          <div className="offerimages">
            <div className="d-flex offerimg">
              <div className="d-flex justify-content-around">
                <img
                  src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210108/reliance/banner/1_nifswb.jpg"
                  alt="offerimage"
                />
                <img
                  src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210108/reliance/banner/2_gareed.jpg"
                  alt="offerimage"
                />
              </div>
              <div className="d-flex justify-content-around">
                <img
                  src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210108/reliance/banner/3_fnzfws.jpg"
                  alt="offerimage"
                />
                <img
                  src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210108/reliance/banner/4_p1cxkg.jpg"
                  alt="offerimage"
                />
              </div>
            </div>
            <div className="d-flex offerimage">
              <div className="d-flex justify-content-around">
                <img
                  src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210108/reliance/banner/5_wspknw.jpg"
                  alt="offerimage"
                />
                <img
                  src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210108/reliance/banner/6_yuvszx.jpg"
                  alt="offerimage"
                />
              </div>
              <div className="d-flex justify-content-around">
                <img
                  src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210109/reliance/banner/7_z9f7dp.jpg"
                  alt="offerimage"
                />
                <img
                  src="https://res.cloudinary.com/drv5pusqd/image/upload/v1644210109/reliance/banner/8_wk03bl.jpg"
                  alt="offerimage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
