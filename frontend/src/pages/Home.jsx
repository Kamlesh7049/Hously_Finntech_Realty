import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import HappySection from "../components/HappySection";
import BankOffers from "../pages/BankOffers";
import TalkToUs from "./TalkToUs";
import FeaturesSection from "./FeaturesSection";
import CalculatorSection from "./CalculatorSection";
import HowItWorks from "./HowItWork";
import Partners from "./Partners";
import PartnerBusinessProgram from "./PartnerBusinessProgram";

// ✅ Importing images correctly
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={image4} width="100%" height="470" className="caro" alt="Slide 1" />
          <Carousel.Caption>
            <Button
              style={{ marginRight: "100%", width: "25%", borderRadius: "20px" }}
              variant="primary"
              onClick={() => { window.location.href = "/applynow"; }}
            >
              Apply Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={image3} width="100%" height="470" className="caro" alt="Slide 2" />
          <Carousel.Caption>
            <Button
              style={{ marginRight: "100%", width: "25%", borderRadius: "20px" }}
              variant="primary"
              onClick={() => { window.location.href = "/applynow"; }}
            >
              Apply Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={image1} width="100%" height="470" className="caro" alt="Slide 3" />
          <Carousel.Caption>
            <Button
              style={{ marginRight: "100%", width: "25%", borderRadius: "20px" }}
              variant="primary"
              onClick={() => { window.location.href = "/applynow"; }}
            >
              Apply Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={image2} width="100%" height="470" className="caro" alt="Slide 4" />
          <Carousel.Caption>
            <Button
              style={{ marginRight: "100%", width: "25%", borderRadius: "20px" }}
              variant="primary"
              onClick={() => { window.location.href = "/applynow"; }}
            >
              Apply Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Other sections */}
      <HappySection />
      <FeaturesSection />
      <BankOffers />
      <TalkToUs />
      <CalculatorSection />
      <HowItWorks />
      <Partners />
      <PartnerBusinessProgram />
    </>
  );
};

export default Home;
