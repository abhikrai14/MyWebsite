import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="desc">
          <h1>About Me</h1>
          <p>{resumeData.aboutme}</p>

          <div className="row">
            <div class="columns download">
              <p>
                <a href="cv/C.V_Abhik Rai (Web).doc" class="button" download>
                  <i class="fa fa-download"></i>Download C.V
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
