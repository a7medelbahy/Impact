import React from "react";
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

const App = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default App;
