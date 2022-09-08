import { Grid } from "@material-ui/core";
import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="p-sec" id="Services">
      <div class="custom-shape-divider-top-1659685390">
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
          <div className="main-srv">
            <h1 className="p-hd">Our Services</h1>
            <div className="box">
              <div className="box-1">
                <img data-aos="fade-up"
                  className="imgg-1"
                  src="./Assets/web.png"
                  alt=""
                  style={{ width: "200px" }}
                />
                <h2 className="dept">Web Development</h2>
              </div>
              <div className="box-2">
                <img data-aos="fade-down"
                  className="imgg-2"
                  src="./Assets/graphic.png"
                  alt=""
                  style={{ width: "200px" }}
                />
                <h2 className="dept">Graphic Designing</h2>
              </div>
              <div className="box-3">
                <img data-aos="fade-up"
                  className="imgg-3"
                  src="./Assets/3d.png"
                  alt=""
                  style={{ width: "200px" }}
                />
                <h2 className="dept">3D</h2>
              </div>
              <div className="box-4">
                <img data-aos="fade-down"
                  className="imgg-4"
                  src="./Assets/digital.png"
                  alt=""
                  style={{ width: "200px" }}
                />
                <h2 className="dept">Digital Marketing</h2>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
