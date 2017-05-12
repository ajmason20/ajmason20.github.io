import React from 'react';

export const SkillsComp = React.createClass({
  render: function(){
    return (
      <div id="skills" className="container skills-container">
        <h1>SKILLS</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <ul className="thumbnail">
                <h2>Web Development</h2>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Sass</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="col-sm-12 col-lg-4">
              <ul className="thumbnail">
                <h2>Javascript</h2>
                <li>Vanilla JS</li>
                <li>React</li>
                <li>Backbone.js</li>
              </ul>
            </div>
            <div className="col-sm-12 col-lg-4">
              <ul className="thumbnail">
                <h2>Dev Tools</h2>
                <li>Git</li>
                <li>GitHub</li>
                <li>npm</li>
                <li>Command Line</li>
              </ul>
            </div>
          </div>
          </div>
          <div className="res-link">
            <h2>View full resume here.</h2>
            <a href="https://drive.google.com/open?id=0B1OsERFXiXayTUdYSnM4cmpjSFE" target="_blank"><i className="fa fa-file-pdf-o" aria-hidden="true"></i></a>
          </div>
        </div>

    )
  }
})
