import { Grid } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import Logo from "../Navbar/Logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <div className="f-main">
      <div class="custom-shape-divider-top-1659948851">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <Grid container>
        <Grid item lg={12} sm={12} xs={12}>
          <div className="logo-f">
            <img className="logo-ff" src={Logo} alt="footer-logo"></img>
          </div>
          <div className="f-text">
            <h2>
              Design Bytes
              <span>
                <h1 style={{ color: "#EBA243" }}>International</h1>
              </span>
            </h2>
          </div>
          <h5 style={{ color: "#EBA243", textAlign: "center" }}>Our Socials</h5>
          <div className="icons">
            <div className="icon">
              <FacebookIcon style={{ fontSize: "50px", color: "blue" }} />
            </div>
            <div className="icon">
              <InstagramIcon style={{ fontSize: "50px", color: "purple" }} />
            </div>
            <div className="icon">
              <TwitterIcon style={{ fontSize: "50px", color: "#115293" }} />
            </div>
          </div>
          <div className="line">
            <hr color="#EBA243" />
          </div>
          <div className="line-txt">
            <h5>@All Rights Reserved 2022</h5>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
