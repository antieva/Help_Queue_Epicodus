import React from 'react';
import PropTypes from 'prop-types';


function Ticket(props) {
  return (
    <div>
      <style global jsx>{`
        h3 {
          margin-left: 40px;
        }
        .issue {
          background-color: #ed6457;
          width: 60%;
        }`
      }</style>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <p className='issue'><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired
};

export default Ticket;
