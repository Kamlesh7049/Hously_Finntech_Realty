import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
import Layout from "./Layout";
import Home from "./pages/Home";
import BankOffers from "./pages/BankOffers";
import Calculators from "./pages/Calculators";
import Contact from "./pages/Contact";



function App() {
  return (
    <>
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="home" element={<Home />} />
          <Route path="bank" element={<BankOffers />} />
          <Route path="calculator" element={<Calculators/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
