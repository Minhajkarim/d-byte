import React from "react";
import { Grid } from "@material-ui/core";
import "./Team.css";

const Team = () => {
  return (
    <div className="parent-div" id="team">
      <div class="custom-shape-divider-top-1659686972">
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
          <div className="parent-heading">
            <h1>Our Team</h1>
          </div>
          <div className="main-box">
            <div className="box-one">
              <img className="img-one" src="./Assets/Team-1.jpg" alt=""/>
              <div className="txt-1">
                <h2 style={{textTransform:'uppercase'}}>Ayesha</h2>
                <h4>Web Developer</h4>
              </div>
            </div>

            <div className="box-two">
              <img className="img-two" src="./Assets/Team-2.jpg" alt=""/>
              <div className="txt-2">
                <h2 style={{textTransform:'uppercase'}}>Ali</h2>
                <h4>Graphic Designer</h4>
              </div>
            </div>

            <div className="box-three">
              <img className="img-three" src="./Assets/Team-3.jpg" alt=""/>
              <div className="txt-3">
                <h2 style={{textTransform:'uppercase'}}>Umair</h2>
                <h4>App Developer</h4>
              </div>
            </div>

            <div className="box-four">
              <img className="img-four" src="./Assets/Team-4.jpg" alt=""/>
              <div className="txt-4">
                <h2 style={{textTransform:'uppercase'}}>Zainab</h2>
                <h4>Digital Marketer</h4>
              </div>
            </div>

          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Team;
