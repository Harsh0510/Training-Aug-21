import { Link } from "react-router-dom";
import "./Fproducts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function ({ featuredProducts, _id, img }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="featuredproducts">
        <img src={img} alt="featuredproducts" className="featuredimage" />
        <div className="slider">
          <Slider {...settings} className="px-5">
            {featuredProducts
              .filter((item) => item.subcategorychild._id === _id)
              .map((i, index) => {
                var slug = `products/singleproduct/${i._id}`;
                return (
                  <>
                    <Link
                      to={slug}
                      className="text-decoration-none"
                      key={index}
                    >
                      <div className="sliderproduct">
                        <img src={i.image} alt="product" />
                        <p className="name">{i.productName}</p>
                        <p className="text-muted offerprice">
                          Deal Price:
                          <span className="dealprice">
                            &#x20B9;
                            {i.offerprice}.00
                          </span>
                        </p>
                        <p className="text-muted">
                          M.R.P: <s>&#x20B9;{i.price}.00</s>
                        </p>
                        <p className="text-muted">
                          You Save:{i.discount.percentage}%(&#x20B9;
                          {i.price - i.offerprice})
                        </p>
                      </div>
                    </Link>
                  </>
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
}
