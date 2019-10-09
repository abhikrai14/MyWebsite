import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contactinfo">
        <h1>Get in touch with me!</h1>
        <div class="info">
          <div class="inner-info">
            <i class="fa fa-map-marker"></i>
            <p>206, Grace Park Road,near Whitehall, Dublin 9, Ireland</p>
            <p>Eircode: D09 NY71</p>
          </div>
          <div class="inner-info">
            <i class="fa fa-envelope"></i>
            <p>abhik.srai@gmail.com</p>
          </div>
          <div class="inner-info">
            <i class="fa fa-phone"></i>
            <p>+353 894206817</p>
          </div>
        </div>
      </section>
    );
  }
}
