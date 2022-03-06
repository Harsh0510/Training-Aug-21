import { React, useState, useEffect } from "react";
import "./Footer.css";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import googlePlay from "../../images/footer/1.png";
import appStore from "../../images/footer/2.png";
// contentful
import createClient from "../../contentful";

let getData = async () => {
  try {
    let response = await createClient.getEntries({
      content_type: process.env.REACT_APP_API_CONTENT_TYPE_FOOTER,
      order: "sys.createdAt",
    });
    return formatData(response.items);
  } catch (error) {
    console.log(error);
  }
};
function formatData(items) {
  const tempItems = items.map((item) => {
    const title = item.fields.title;
    const items = item.fields.items.map((item) => item);
    const data = { title, items };
    return data;
  });
  return tempItems;
}
export default function Footer() {
  const [data, setData] = useState([]);

  var displayData = async () => {
    setData(await getData());
  };
  useEffect(() => {
    displayData();
  }, []);
  // console.log(data);
  return (
    <>
      <div className="footer">
        <div className="info">
          {data.map((item) => {
            return (
              <>
                <div>
                  <h6>{item.title}</h6>
                  {item.items.map((item) => {
                    return (
                      <>
                        <p>{item}</p>
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* 
          <div>
            <h6>PRODUCT CATEGORIES</h6>
            <p>Smartphones</p>
            <p>Laptops</p>
            <p>DSLR Cameras</p>
            <p>Televisions</p>
            <p>Air Conditioners</p>
            <p>Refrigerators</p>
            <p>Kitchen Appliances</p>
            <p>Accessories</p>
            <p>Personal Care & Grooming</p>
          </div>
          <div>
            <h6>SITE INFO</h6>
            <p>About Reliance Digital</p>
            <p>resQ Services</p>
            <p>Site Map</p>
            <p>Gift Cards</p>
            <p>Corporate Enquires</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h6>RESOURCE CENTRE</h6>
            <p>Product Reviews</p>
            <p>Buying Guides</p>
            <p>How Tos</p>
            <p>Featured Stories</p>
            <p>Events & Happenings</p>
          </div>
          <div>
            <h6>POLICIES</h6>
            <p>Terms of use</p>
            <p>Cancellations & Returns</p>
            <p>Privacy policy</p>
            <p>E-waste policy</p>
            <p>EMI Terms & Conditions</p>
            <p>Pricing and Payments Policy</p>
            <p>Delivery & Shipping Policy</p>
            <p>JioMart Maha Cashback T & C</p>
          </div>
        </div>
        <div className="center">
          <div className="left">
            <h6>FOLLOW US</h6>
            <AiFillFacebook />
            <AiOutlineTwitter />
            <TiSocialYoutubeCircular />
          </div>
          <div className="right">
            <h6>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h6>
            <div>
              <img src={googlePlay} alto="noload" />
              <img src={appStore} alto="noload" />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="line"></div>
          <p>© 2021 Reliance Digital. All Rights Reserved.</p>
        </div>
      </div> */}
    </>
  );
}
