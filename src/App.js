import React, { Component } from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured/Featured";
import VenueNfo from "./components/venueNfo/VenueNfo";
import Highlights from "./components/Highlights/Highlights";
import Pricing from "./components/pricing/Pricing";
import Location from "./components/location/Location";
import Footer from "./components/header_footer/Footer";

class App extends Component {
  render() {
    return (
      <div style={{}}>
        <Header />
        <Element name="startsin">
          <Featured />
        </Element>
        <Element name="info">
          <VenueNfo />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
