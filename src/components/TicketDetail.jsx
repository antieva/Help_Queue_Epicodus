import React from 'react';
import PropTypes from 'prop-types';

function TicketDetail(props){
  return (
    <div>
     <hr/>
     <h2>{props.selectedTicket.names} - {props.selectedTicket.location}</h2>
     <h3>Submitted {props.selectedTicket.formattedWaitTime} ago</h3>
     <h4 className='issue'><em>{props.selectedTicket.issue}</em></h4>
     <hr/>
   </div>
  );
}

TicketDetail.propTypes = {
  selectedTicket: PropTypes.object
};

export default TicketDetail;
