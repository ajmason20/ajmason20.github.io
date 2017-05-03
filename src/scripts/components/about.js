import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Waypoint from 'react-waypoint';

export const AboutComp = React.createClass({
  render: function(){
    return (
      <div  id="about" className="about-container">
        {/* <Waypoint> */}
          <CSSTransitionGroup
            transitionName="abouttitle"
            transitionAppear={true}
            transitionAppearTimeout={2000}
            transitionEnter={false}
            transitionLeave={false}>
            <h2>ABOUT</h2>
          </CSSTransitionGroup>
      {/* </Waypoint> */}
        <div className="headshot">
          <img src="images/IMG_1821.png"/>
        </div>
        <p>Hi, I'm Andrew.<br/>I geek out over bouldering, great design, and new opporunities to learn. Currently residing in Charleston, SC with my black lab, Bear.</p>
      </div>
    )
  }
})
