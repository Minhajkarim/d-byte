import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import "./Contact.css";
import mapImg from "./map.png";

const Contact = () => {
  return (
    <div className="cont-p" id="contact">
      <div class="custom-shape-divider-top-1659952442">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <Grid container>
        <Grid item lg={12} sm={12} xs={12}>
          <div className="cont-h">
            <h1>Contact Us</h1>
          </div>
          <div className="main-cont">
            <div className="form">
              <form>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                    style={{
                      marginTop: "10px",
                      marginLeft: "4px",
                    }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    style={{
                      marginTop: "10px",
                      marginLeft: "4px",
                    }}
                  />
                </div>
                <div>
                  <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    style={{
                      marginTop: "10px",
                      marginLeft: "4px",
                    }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Subject"
                    variant="outlined"
                    style={{
                      marginTop: "10px",
                      marginLeft: "4px",
                    }}
                  />
                </div>
                <TextField
                  id="outlined-basic"
                  label="Message"
                  variant="outlined"
                  style={{
                    marginTop: "10px",
                    marginLeft: "4px",
                  }}
                />
              </form>
              <Button className="cont-btn" style={{ color: "black" }}>
                Submit
              </Button>
            </div>
            <div className="map">
              <img className="map-img" src={mapImg} alt=""></img>
              <br />
              <a
                className="map-link"
                href="https://www.google.com/maps/place/Design+Bytes+International/@35.8969714,74.3533005,17z/data=!3m1!4b1!4m5!3m4!1s0x38e649c8abee578b:0x48caccf741c7f6dc!8m2!3d35.8969671!4d74.3554892"
              >
                Click here to view full map
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
