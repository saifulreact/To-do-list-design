import React, { useEffect } from "react";
import Lottie from "lottie-react";
import todo from "../../../public/Animation/Animation - 1729900344054.json";
import saiful from '../../../public/Animation/saiful.json';
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <section className="container">
      <div className="flex-container">
        <div className="text-section" data-aos="fade-right">
          <h1>Hello there!</h1>
          <h2>To your todo list</h2>
          <p >
           To do list will make your day special and save your time
          </p>
          <Link to="/todo" className="get-started-button" data-aos="zoom-in">
            Get Started
          </Link>
        </div>
        <div className="animation-container" data-aos="fade-left">
          <Lottie animationData={todo} loop={true} />
          {/* <Lottie animationData={saiful} /> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
