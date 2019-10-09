import React, { Component } from "react";
export default class Skills extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="skills">
        <div class="skills-desc">
          <h1 class="bold-text">Skills</h1>
        </div>

        <div class="responsive">
          <i class="icon devicon-html5-plain-wordmark colored"></i>
        </div>

        <div class="responsive">
          <i class="icon devicon-css3-plain-wordmark colored"></i>
        </div>

        <div class="responsive">
          <i class="icon devicon-bootstrap-plain-wordmark colored"></i>
        </div>

        <div class="responsive">
          <i class="icon devicon-javascript-plain-wordmark colored"></i>
        </div>

        <div class="responsive">
          <i class="icon devicon-mysql-plain-wordmark colored"></i>
        </div>

        <div class="responsive">
          <i class="icon devicon-php-plain colored"></i>
        </div>

        <div class="responsive">
          <i class="icon devicon-nodejs-plain-wordmark colored"></i>
        </div>

        <div class="responsive">
          <i class="icon devicon-oracle-plain colored"></i>
        </div>

        <div class="responsive">
          <i class="icon devicon-react-plain-wordmark colored"></i>
        </div>

        <div class="responsive">
          <i class="icon devicon-sass-original colored"></i>
        </div>

        <div class="responsive">
          <i class="icon devicon-dot-net-plain-wordmark colored"></i>
        </div>

        <div class="responsive">
          <i class="icon devicon-amazonwebservices-plain-wordmark colored"></i>
        </div>

        <div class="responsive">
          <i class="icon devicon-csharp-plain-wordmark colored"></i>
        </div>

        <div class="responsive">
          <i class="icon devicon-java-plain-wordmark colored"></i>
        </div>

        <div class="responsive">
          <i class="icon devicon-visualstudio-plain-wordmark colored"></i>
        </div>

        <div class="responsive">
          <i class="icon devicon-wordpress-plain-wordmark colored"></i>
        </div>

        <div class="responsive">
          <i class="icon devicon-git-plain-wordmark colored"></i>
        </div>

        <div class="clearfix"></div>
      </section>
    );
  }
}
