import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import "./styles.css";

const Navbar = () => {
  const [showMobileDropDown, setShowMobileDropDown] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [showPartnership, setShowPartnership] = useState(false);


//we can use this effect if we want to show only one dropdown at a time  
//   useEffect(() => {
//     if (showLocations) {
//       setShowPolicy(false);
//       setShowPartnership(false);
//     }
//     if (showPolicy) {
//       setShowLocations(false);
//       setShowPartnership(false);
//     }
//     if (showPartnership) {
//       setShowLocations(false);
//       setShowPolicy(false);
//     }
//   }, [showLocations, showPolicy, showPartnership]);

  const locations = [
    { name: "Palolem Beach", route: "palolem-goa" },
    { name: "Fort Kochi", route: "kochi" },
    { name: "Munnar", route: "munar" },
    { name: "Madurai", route: "madurai" },
    { name: "Varkala-Helipad", route: "varkala-helipad" },
  ];
  const partnerships = [
    { name: "Franchisee", route: "franchisee" },
    { name: "Partner with us", route: "kochi" },
  ];
  const policy = [
    { name: "Hostels Policy", route: "hostel-policy" },
    { name: "Cancellation Policy", route: "cancellation-policy" },
  ];

  const mobileDropDown = () => (
    <div className="mobileDropDown">
      <div className="mobileDropDownItem">Home</div>
      <div
        className="mobileDropDownItem"
        onClick={() => setShowLocations(!showLocations)}
      >
        <span>Locations</span>
        <span className="arrowIcon">
          {!showLocations ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </span>
        {showLocations && (
          <div className="dropDownMob">{dropDownMobile(locations)}</div>
        )}
      </div>
      <div
        className="mobileDropDownItem"
        onClick={() => setShowPolicy(!showPolicy)}
      >
        <span>Policy</span>{" "}
        <span className="arrowIcon">
          {!showPolicy ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </span>
        {showPolicy && (
          <div className="dropDownMob">{dropDownMobile(policy)}</div>
        )}
      </div>
      <div className="mobileDropDownItem">Facilities</div>
      <div className="mobileDropDownItem">Gallery</div>
      <div
        className="mobileDropDownItem"
        onClick={() => setShowPartnership(!showPartnership)}
      >
        <span>PartnerShip </span>{" "}
        <span className="arrowIcon">
          {!showPartnership ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </span>
        {showPartnership && (
          <div className="dropDownMob">{dropDownMobile(partnerships)}</div>
        )}
      </div>
    </div>
  );
  const dropDownWeb = (data) => {
    return data.map((d) => {
      return (
        <div className="dropDownWebContent">
          <span className="dropDownWebTxt">{d.name}</span>
        </div>
      );
    });
  };
  const dropDownMobile = (data) => {
    return data.map((d) => {
      return (
        <div className="dropDownMobContent">
          <span className="dropDownMobTxt">{d.name}</span>
        </div>
      );
    });
  };
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
      <span
        className="menuIcon"
        onClick={() => setShowMobileDropDown(!showMobileDropDown)}
      >
        <MenuIcon fontSize="large" />
      </span>
      <span className="navBarItems">
        <span className="navBarItem">
          <span></span>Home
        </span>
        <span
          className="navBarItem"
          onClick={() => setShowLocations(!showLocations)}
        >
          <span>Locations</span>{" "}
          {!showLocations ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          <div className="dropDownWeb">
            {showLocations && dropDownWeb(locations)}
          </div>
        </span>
        <span className="navBarItem" onClick={() => setShowPolicy(!showPolicy)}>
          Policy {!showPolicy ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          <div className="dropDownWeb">{showPolicy && dropDownWeb(policy)}</div>
        </span>
        <span className="navBarItem"> Facilities</span>
        <span className="navBarItem">Gallery</span>
        <span
          className="navBarItem"
          onClick={() => setShowPartnership(!showPartnership)}
        >
          PartnerShip
          {!showPartnership ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          <div className="dropDownWeb">
            {showPartnership && dropDownWeb(partnerships)}
          </div>
        </span>
      </span>
      {showMobileDropDown && mobileDropDown()}
    </div>
  );
};

export default Navbar;
