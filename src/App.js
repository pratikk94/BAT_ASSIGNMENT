import "./App.css";
import Student from "./pages/student/student.js";
import React from "react";
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";
import GaurdianPage from "./components/guardian/Gaurdian.js";
function App() {
  return (
    <div className="App">
      <MDBNavbar sticky light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Sticky top</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <Student />
      {/* <GaurdianPage /> */}
      {/* <Student /> */}
    </div>
  );
}

export default App;
