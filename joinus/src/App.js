import React from "react";
import "./App.css";

export default function App() {
  const navigateToExternalWebsite = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <div className="full">
        <div className="logo">
          <p className="lr1">JOIN</p>
          <img
            src="https://web.mitsgwalior.in/images/starup%20cell.jpg"
            alt="something"
          />
          <p className="lr2">NOW</p>
        </div>
        <h1 className="head">JOIN US ON VARIOUS PLATFORMS</h1>
        <div className="main">
          <div
            onClick={() =>
              navigateToExternalWebsite(
                "https://instagram.com/startupcellmits?igshid=MmU2YjMzNjRlOQ=="
              )
            }
            className="Element"
          >
            <img
              src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"
              alt="ele"
            />
            <p className="texx">Instagram</p>
          </div>
          <div
            onClick={() =>
              navigateToExternalWebsite("https://startupcellmits.me/")
            }
            className="Element"
          >
            <img
              src="https://www.freepnglogos.com/uploads/logo-internet-png/logo-internet-index-forum-image-17.png"
              alt="ele"
            />
            <p className="texx">Website</p>
          </div>
          <div
            onClick={() =>
              navigateToExternalWebsite(
                "https://www.linkedin.com/company/startup-cell-mits/"
              )
            }
            className="Element"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="ele"
            />
            <p className="texx">LinkedIn</p>
          </div>
        </div>
      </div>
    </>
  );
}
