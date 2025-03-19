import React from "react";
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
import UserDashboard from "./pages/UserDashboard";
import { ToastContainer } from "react-toastify";

// Import admin pages or components if available
// import Employees from "./admin/Employees";
// import Finance from "./admin/Finance";
// import Performance from "./admin/Performance";
// import Projects from "./admin/Projects";
// import Reports from "./admin/Reports";
// import ManageClients from "./admin/ManageClients";

function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <Router>
        <Routes>
          {/* Public Routes with Layout */}
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
            <Route path="/eligibilitycalculator" element={<EligibilityCalculator />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/singup" element={<Signup />} />
            <Route path="/singin" element={<Signin />} />
            <Route path="/ahome" element={<Home />} />
          </Route>

          {/* Admin/Dashboard Routes */}
          <Route path="/user-dashboard" element={<UserDashboard />} />
          {/* <Route path="/ahome" element={<Home />} /> */}
          {/* Add routes for other dashboard menu items */}
          {/* Uncomment and adjust these routes when components are available */}
          {/* <Route path="/employees" element={<Employees />} /> */}
          {/* <Route path="/finance" element={<Finance />} /> */}
          {/* <Route path="/offer" element={<Offers />} /> */}
          {/* <Route path="/performance" element={<Performance />} /> */}
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/reports" element={<Reports />} /> */}
          {/* <Route path="/manage-clients" element={<ManageClients />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;