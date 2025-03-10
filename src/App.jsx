import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom"; // import Route and Routes
/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
// import { petData } from "./data/pets";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  // const [pets] = useState(petData);

  return (
    <div className="wrapper">
      <Nav />
      {/* create separate views for pages using Route paths */}
      <Routes>
        <Route path="/" element={<Home employees={employees} owners={owners} />} />
        <Route path="/staff" element={<StaffList employees={employees} />} /> 
        {/* path is /staff because in Nav.jsx <a href="/staff">All Staff</a> */}
        <Route path="/pets" element={<PetsList />} />
        {/* path is /pets because in Nav.jsx <a href="/pets">All Pets</a> */}
        <Route path="/pets/:kind" element={<PetsList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
