import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import BankOffers from "./pages/BankOffers";
import Calculators from "./pages/CalculatorSection";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import EmiCalculator from "./pages/EmiCalculator";

import ForecloseCalculator from "./pages/ForeCloseCalculator"; 


import EligibilityCalculator from "./pages/EligibilityCalculator";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="bank" element={<BankOffers />} />
            <Route path="calculator" element={<Calculators />} />
            <Route path="/emicalculator" element={<EmiCalculator />} />
            <Route
              path="/foreclosecalculator"
              element={<ForecloseCalculator />}
            />
            <Route path="/eligibilitycalculator" element={<EligibilityCalculator/>} />

            <Route path="contact" element={<Contact />} />
            <Route path="/singup" element={<Signup />}></Route>
            <Route path="/singin" element={<Signin />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
