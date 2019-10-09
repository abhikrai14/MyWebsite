import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">

        <h1>Check Out Some of My Works.</h1>

<div id="portfolio-wrapper" class="bgrid-quarters s-bgrid-thirds cf">

   <div class="columns portfolio-item">
      <div class="item-wrap">

         <a href="#modal-01" title="">
            <img alt="" src="images/portfolio/weather.jpg"></img>
            <div class="overlay">
               <div class="portfolio-item-meta">
              <h5>Ireland Weather Forecast</h5>
                  <p>Website</p>
           </div>
            </div>
            <div class="link-icon"><i class="icon-plus"></i></div>
         </a>

      </div>
  </div> 

   <div class="columns portfolio-item">
      <div class="item-wrap">

         <a href="#modal-02" title="">
            <img alt="" src="images/portfolio/paints.jpg"></img>
            <div class="overlay">
               <div class="portfolio-item-meta">
              <h5>Decorative Paints</h5>
                  <p>Website</p>
           </div>
            </div>
            <div class="link-icon"><i class="icon-plus"></i></div>
         </a>

      </div>
  </div> 

   <div class="columns portfolio-item">
      <div class="item-wrap">

         <a href="#modal-03" title="">
            <img alt="" src="images/portfolio/indiam.png"></img>
            <div class="overlay">
               <div class="portfolio-item-meta">
              <h5>Indiam Technologies</h5>
                  <p>Website</p>
           </div>
            </div>
            <div class="link-icon"><i class="icon-plus"></i></div>
         </a>

      </div>
  </div> 

   <div class="columns portfolio-item">
      <div class="item-wrap">

         <a href="#modal-04" title="">
            <img alt="" src="images/portfolio/pr.png"></img>
            <div class="overlay">
               <div class="portfolio-item-meta">
              <h5>PR Chess Academy</h5>
                  <p>Website</p>
           </div>
            </div>
            <div class="link-icon"><i class="icon-plus"></i></div>
         </a>

      </div>
  </div> 

   <div class="columns portfolio-item">
      <div class="item-wrap">

         <a href="#modal-05" title="">
            <img alt="" src="images/portfolio/visitor.png"></img>
            <div class="overlay">
               <div class="portfolio-item-meta">
              <h5>Visitor's Management System</h5>
                  <p>Internship Project</p>
           </div>
            </div>
            <div class="link-icon"><i class="icon-plus"></i></div>
         </a>

      </div>
  </div> 

   <div class="columns portfolio-item">
      <div class="item-wrap">

         <a href="#modal-06" title="">
            <img alt="" src="images/portfolio/face.jpg"></img>
            <div class="overlay">
               <div class="portfolio-item-meta">
              <h5>Alexa, Who is it?</h5>
                  <p>IoT Project</p>
           </div>
            </div>
            <div class="link-icon"><i class="icon-plus"></i></div>
         </a>

      </div>
  </div> 

   <div class="columns portfolio-item">
      <div class="item-wrap">

         <a href="#modal-07" title="">
            <img alt="" src="images/portfolio/mls.jpg"></img>
            <div class="overlay">
               <div class="portfolio-item-meta">
              <h5>Movie Library System</h5>
                  <p>Client-Server Application</p>
           </div>
            </div>
            <div class="link-icon"><i class="icon-plus"></i></div>
         </a>

      </div>
  </div> 

   <div class="columns portfolio-item">
      <div class="item-wrap">

         <a href="#modal-08" title="">
            <img alt="" src="images/portfolio/nds.png"></img>
            <div class="overlay">
               <div class="portfolio-item-meta">
              <h5>Newspaper Delivery System</h5>
                  <p>Java Application</p>
           </div>
            </div>
            <div class="link-icon"><i class="icon-plus"></i></div>
         </a>

      </div>
  </div>  

</div> 

</div> 

<div id="modal-01" class="popup-modal mfp-hide">

 <img class="scale-with-grid" src="images/portfolio/modals/weather.jpg" alt="" /> 

<div class="description-box">
<h4>Ireland Weather Forecast</h4>
<p>Responsive Website which includes listing cities using JSON file which is fetched using openweathermap API and displaying weather data in the form of a card layout for an interactive user interface. Displaying statistical analysis in the form of line and bar graph through data parsed from XML and using a chart.js library. </p>
   <span class="categories"><i class="fa fa-tag"></i>Responsive Website (API, Card Layout, JavaScript)</span>
</div>

<div class="link-box">
 <a class="popup-modal-dismiss">Close</a>
</div>

</div>

<div id="modal-02" class="popup-modal mfp-hide">

<img class="scale-with-grid" src="images/portfolio/modals/decorativepaints.jpg" alt="" />

<div class="description-box">
<h4>Decorative Paints</h4>
<p>Created an informative and interactive website about the decorative paints. Website includes various modules like: view color palettes, products available, color picker, paint calculator and paint your home. Also made use of web services.</p>
   <span class="categories"><i class="fa fa-tag"></i>Web Development (Visual Studio, MS SQL Server, Bootstrap, CSS, C#.Net, JavaScript)</span>
</div>

<div class="link-box">
 <a class="popup-modal-dismiss">Close</a>
</div>

</div>

<div id="modal-03" class="popup-modal mfp-hide">

<img class="scale-with-grid" src="images/portfolio/modals/indiamtech.jpg" alt="" />

<div class="description-box">
<h4>Indiam Technologies</h4>
<p>Designed a complete website for a client with a team.</p>
   <span class="categories"><i class="fa fa-tag"></i>Responsive Website</span>
</div>

<div class="link-box">
   <a href="http://indiam.tech/">Go to Website</a>
 <a class="popup-modal-dismiss">Close</a>
</div>

</div>

<div id="modal-04" class="popup-modal mfp-hide">

<img class="scale-with-grid" src="images/portfolio/modals/prchess.jpg" alt="" />

<div class="description-box">
<h4>PR Chess Academy</h4>
<p>Created a website for a chess academy to display their achievements, avaliable courses in a card layout with the prices and a gallery to showcase their event pictures.</p>
   <span class="categories"><i class="fa fa-tag"></i>Website (Bootstrap, tabs, card, PHP)</span>
</div>

<div class="link-box">
   <a href="https://prchessacademy.in/newtrial/index.php">Go to Website</a>
 <a class="popup-modal-dismiss">Close</a>
</div>

</div>

<div id="modal-05" class="popup-modal mfp-hide">

<div class="description-box">
<h4>Visitor's Management System</h4>
<p>Designed a fully working Visitor's Management System in Oracle Apex for the company from scratch to manage the visitors. Completed projects and work assignments on time, while aware of tight deadlines. Provided ease of access and navigation for important data by compiling, organizing and uploading organizational documents to Oracle database. Efficiently implemented the different functionalities of the application in an Agile Environment. Fostered operational efficiency and compliance with company policies through effective coordination with Project Manager.
</p>
   <span class="categories"><i class="fa fa-tag"></i>Oracle Apex Application</span>
</div>

<div class="link-box">
 <a class="popup-modal-dismiss">Close</a>
</div>

</div>=

<div id="modal-06" class="popup-modal mfp-hide">


<div class="description-box">
<h4>Alexa, Who is it?</h4>
<p>Implemented using Raspberry Pi Camera, AWS Lambda, Firebase, Kairos API and Alexa. The main functionality of this project is to use the camera module to detect the face of a person using Face Recognition API at the door of the house and help Alexa to recognize the face and dynamically inserting them into the real-time database as whitelist and also to improve her recognizing skills each time the person visits the home. Used Node.js to implement the code.</p>
   <span class="categories"><i class="fa fa-tag"></i>IoT Project (Face Recognition System integrated with Alexa)</span>
</div>

<div class="link-box">
 <a class="popup-modal-dismiss">Close</a>
</div>

</div>

<div id="modal-07" class="popup-modal mfp-hide">

<div class="description-box">
<h4>Movie Library System</h4>
<p>Created an application built in Java using REST Services, XMLPullParser and HSQLDB to perform PUT, POST, GET and DELETE operations.</p>
   <span class="categories"><i class="fa fa-tag"></i>Client-Server Application (Java EE, HSQLDB)</span>
</div>

<div class="link-box">
 <a class="popup-modal-dismiss">Close</a>
</div>

</div>

<div id="modal-08" class="popup-modal mfp-hide">
<div class="description-box">
<h4>Newspaper Delivery System</h4>
<p>Fully functional local newspaper delivery system from the perspective of a shop keeper and delivery persons, programmed in Java. Worked in a team as a scrum master by following all the aspects of Agile Methodologies and Test-Driven development using JUnit, maintained the Git team repository and version control system in Bitbucket.</p>
   <span class="categories"><i class="fa fa-tag"></i>Java Application (JDBC, Agile)</span>
</div>

<div class="link-box">
 <a class="popup-modal-dismiss">Close</a>
</div>

</div>


</div> 

</section> 

        );
  }
}