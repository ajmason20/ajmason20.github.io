import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export const AboutComp = React.createClass({
  render: function(){
    return (
      <div  id="about" className="about-container">
        <CSSTransitionGroup
          transitionName="abouttitle"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}>
          <h2>ABOUT</h2>
        </CSSTransitionGroup>
        <div className="headshot"></div>
        <p>Hi, I'm Andrew.<br/>I geek out over bouldering, great design, and new opporunities to learn. Currently residing in Charleston, SC with my black lab, Bear.</p>
      </div>
    )
  }
})
