import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">NM</div>
          <div className="right">
            <p>Bangalore, India</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By NM</p>
          </div>
          <div className="centre">
            <div className="button-group">
              {/* Inventory Management Button */}
              {/* <button onClick={() => navigate("/new-page")}>
                Inventory Management
              </button> */}
{/*               
              Admin Page Button */}
              <button onClick={() => navigate("/admin")}>
                Administrator Login
              </button>
            </div>
          </div>
          <div className="right">
            <p>All Rights Reserved By NM.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
