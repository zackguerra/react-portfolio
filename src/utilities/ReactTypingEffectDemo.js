import React from 'react';
import PropTypes from 'prop-types';
import ReactTypingEffect from 'react-typing-effect';
import './ReactTypingEffectDemo.css';


const ReactTypingEffectDemo = () => {
  return (
    <div
    //   style={{
    //     position: 'fixed',
    //     top: 0,
    //     left: 0,
    //     width: '100%',
    //     height: '100%',
    //     display: 'flex',
    //   }}
    >
      <div className="typingText">
        <ReactTypingEffect 
        text={["Hi, Im Zack.", "I am a Front-End Developer.", "I am a Tech Lover.", "I Love to Develop."]}
        speed={60}
        eraseDelay={10} />
        <br />        
      </div>
    </div>
  );
};
ReactTypingEffectDemo.propTypes = {
};
export default ReactTypingEffectDemo;