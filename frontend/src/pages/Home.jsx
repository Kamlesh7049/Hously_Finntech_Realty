import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import BankOffers from "../pages/BankOffers";

import ban1 from "../assets/images/ban1.jpg";
import ban2 from "../assets/images/ban1.jpg";
import ban3 from "../assets/images/ban3.jpg";


const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={ban1} width="100%" height="380" className="caro" />
          <Carousel.Caption>
            <div style={{ color: "black", marginRight: "80%" }}>
              <h1 style={{ color: "#666666", font: "30px arial, sans-serif" }}>
                Property Loan
              </h1> <br />
              <p style={{ color: "#181b30", font: "30px Arial, sans-serif" }}>
                Loan Against Property at
                <h2 style={{ color: "#ba8a07" }}>Low Interest Rates!</h2>
              </p>
              <Button variant="primary"
                onClick={() => { window.location.href = "/applynow" }}
              >Apply Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ban2} width="100%" height="380" className="caro" />
          <Carousel.Caption>
            <div style={{ color: "black", marginRight: "80%" }}>
              <h1 style={{ color: "#666666", font: "30px arial, sans-serif" }}>
                Home Loan
              </h1> <br />
              <p style={{ color: "#181b30", font: "30px Arial, sans-serif" }}>
                Apply Now &
                <h1 style={{ color: "#0e2ae3" }}>
                  Get Instant Approval!
                </h1></p>
              <Button variant="primary"
                onClick={() => { window.location.href = "/applynow" }}
              >Apply Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ban3} width="100%" height="380" className="caro" />
          <Carousel.Caption>
            <div style={{ color: "black", marginRight: "80%" }}>
              <h1 style={{ color: "#666666", font: "30px arial, sans-serif" }}>
                Balance transfer
              </h1> <br />
              <p style={{ color: "#181b30", font: "30px Arial, sans-serif" }}>
                Transfer Your Balance Today &
                <h1 style={{ color: "#1f6e0f" }}>
                  Save Big!
                </h1></p>
              <Button variant="primary"
                onClick={() => { window.location.href = "/applynow" }}
              >
                Apply Now
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <BankOffers />
    </>
  )
}

export default Home; 