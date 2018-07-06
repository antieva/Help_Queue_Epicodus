import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <style>{`
          button {
            width: 150px;
            height: 30px;
            color: #ce4914;
          }
      `}</style>
      <p>Have you gone through all the steps on the Learn How to Program debugging lesson?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
