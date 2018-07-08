import React from 'react';
import PropTypes from 'prop-types';


function Ticket(props) {

  const ticketInformation =
    <div>
      <style global jsx>{`
        h3, h4 {
          margin-left: 40px;
        }
        .issue {
          background-color: #dbd9d9;
          height: 100px;
        }`
      }</style>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/admin'){
  return (
    <div onClick={() => {props.onTicketSelection({names: props.names, location: props.location, issue: props.issue, formattedWaitTime: props.formattedWaitTime});}}>
      {ticketInformation}
    </div>
  );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default Ticket;
