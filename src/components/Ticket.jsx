import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Ticket(props) {

  function handleSavingSelectedTicket(ticketId) {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_TICKET',
      ticketId: ticketId
    };
    dispatch(action);
  }

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
    <div onClick={() => {handleSavingSelectedTicket(props.ticketId);}}>
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
  ticketId: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default connect()(Ticket);
