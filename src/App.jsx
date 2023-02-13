import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Portfolio from "./components/portfolio/Portfolio";
import Team from "./components/team/Team";
import Plans from "./components/plans/Plans";
import Questions from "./components/questions/Questions";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import LandingBoxes from "./components/landingBoxes/LandingBoxes";
import Clients from "./components/clients/Clients";
import Statics from "./components/statics/Statics";
import ActionVideo from "./components/actionvideo/ActionVideo";
import UpBtn from "./components/UpBtn";
import HashLoader from "react-spinners/HashLoader";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const styling = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
  };
  return (
    <React.Fragment>
      {loading ? (
        <HashLoader
          style={styling}
          color={"#36d7b7"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>
          <Navbar />
          <Landing />
          <LandingBoxes />
          <About />
          <Clients />
          <Statics />
          <ActionVideo />
          <Services />
          <Testimonials />
          <Portfolio />
          <Team />
          <Plans />
          <Questions />
          <Blog />
          <Contact />
          <Footer />
          <UpBtn />
        </div>
      )}
    </React.Fragment>
  );
};

export default App;
