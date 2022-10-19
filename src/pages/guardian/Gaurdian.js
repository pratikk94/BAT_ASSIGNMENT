import React from "react";
import Gaurdian from "../../components/guardian/guardian";

export default function GaurdianPage() {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div style={{ position: "fixed" }}>
        <img
          src="https://www.toptal.com/designers/subtlepatterns/uploads/moroccan-flower.png"
          className="img-fluid"
          alt="Wild Landscape"
          width="3200vw"
          height="200px"
          zIndex="-100"
        />
      </div>
      <div>
        <Gaurdian />
      </div>
    </section>
  );
}
