import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./styles.css";

const Navbar = () => {
  const [showMobileDropDown, setShowMobileDropDown] = useState(false);
  const mobileDropDown = () => (
    <div className="mobileDropDown">
      <div className="mobileDropDownItem">Home</div>
      <div className="mobileDropDownItem">Locations</div>
      <div className="mobileDropDownItem">Policy</div>
      <div className="mobileDropDownItem">Facilities</div>
      <div className="mobileDropDownItem">Gallery</div>
      <div className="mobileDropDownItem">PartnerShip</div>
    </div>
  );
  return (
    <div className="navBar">
      <span className="logo">
        <img
          className="logoImg"
          src="https://www.thelosthostels.com/wp-content/themes/losthostel/images/logo.png"
          alt="logo"
        />
        <span className="logoTxt">The Lost Hostels</span>
      </span>
      <span className="menuIcon" onClick={() => setShowMobileDropDown(!showMobileDropDown)}>
        <MenuIcon fontSize="large" />
      </span>
      <span className="navBarItems">
        <span className="navBaritem"> Home</span>
        <span className="navBaritem"> Locations</span>
        <span className="navBaritem"> Policy</span>
        <span className="navBaritem"> Facilities</span>
        <span className="navBaritem">Gallery</span>
        <span className="navBaritem">PartnerShip</span>
      </span>
      {showMobileDropDown && mobileDropDown()}
    </div>
  );
};

export default Navbar;
