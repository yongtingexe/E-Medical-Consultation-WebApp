import React from "react";

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://www.mof.gov.my/portal/images/2021/01/26/foto-250121c1_large.jpg')",
          height: 550,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
