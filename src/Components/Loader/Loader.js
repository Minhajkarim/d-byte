/* eslint-disable no-undef */
import { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Logo from "../Navbar/Logo.png";
import './Loader.css'

const Loader = () => {
  useEffect(() => {
    const tween3 = new gsap.timeline();

    const loaderBackground = document.querySelectorAll(".loader");

    tween3
      .add(
        gsap.to(
          ".logo-letter",
          1,
          {
            opacity: 0,
            y: -40,
            delay: 1.25,
            stagger: {
              each: 0.02,
            },
            ease: Power1.easeInOut,
          },
          0.02
        )
      )
      .add(
        gsap.to(loaderBackground, 1, {
          y: "120vh",
          height: 0,
          duration: 2,
          delay: 0,
        })
      );
  }, []);

  return (
    <Container className="container loader">
      <div data-aos="fade-in">
        <div>
          <img src={Logo} className="logo-l" alt="logo" />
        </div>
        <div>
          <a href="logo" className="logo-text-loader">
            <span className="logo-letter">D</span>
            <span className="logo-letter">E</span>
            <span className="logo-letter" style={{ marginRight: 10 }}>
              S
            </span>
            <span className="logo-letter">I</span>
            <span className="logo-letter">G</span>
            <span className="logo-letter" style={{ marginRight: 10 }}>
              N
            </span>
            <span className="logo-letter">B</span>
            <span className="logo-letter">Y</span>
            <span className="logo-letter">T</span>
            <span className="logo-letter">E</span>
            <span className="logo-letter">S</span>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Loader;
