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






const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src="./src/assets/images/4.png" width="100%" height="470vh" className="caro" />
          <Carousel.Caption>
            
              <Button style={{marginRight:"100%", width:"25%", borderRadius:"20px"  }} variant="primary"onClick={() => { window.location.href = "/applynow" }}>Apply Now</Button>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="./src/assets/images/3.png" width="100%" height="470" className="caro" />
          <Carousel.Caption>
            
              <Button style={{marginRight:"100%", width:"25%", borderRadius:"20px" }} variant="primary"onClick={() => { window.location.href = "/applynow" }}>Apply Now</Button>

            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="./src/assets/images/1.png" width="100%" height="470" className="caro" />
          <Carousel.Caption>
            
          <Button style={{marginRight:"100%", width:"25%", borderRadius:"20px" }} variant="primary"onClick={() => { window.location.href = "/applynow" }}>Apply Now</Button>

            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="./src/assets/images/2.png" width="100%" height="470" className="caro" />
          <Carousel.Caption>
          
          <Button style={{marginRight:"100%", width:"25%", borderRadius:"20px" }} variant="primary"onClick={() => { window.location.href = "/applynow" }}>Apply Now</Button>

            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <HappySection/>
      <FeaturesSection/>
      <BankOffers />
      <TalkToUs />
      
      <CalculatorSection/>
      <HowItWorks />
      <Partners/>
      <PartnerBusinessProgram/>
    </>
  )
}

export default Home;