import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

import Button from "../utils/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  porcentage() {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    setTimeout(() => {
      this.porcentage();
    }, 60);
  }
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal={() => {
              this.porcentage();
            }}
          >
            <span className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </span>
          </Fade>
          <Slide right delay={500}>
            <div className="discount_description">
              <h3>Purchase tickets</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                consequatur aperiam tempora libero numquam praesentium
                voluptatem deserunt sit reiciendis dolorem.
              </p>
              <div>
                <Button
                  text="Purchase tickets"
                  bck="#ffa800"
                  color="#ffffff"
                  link="http://google.com"
                />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
