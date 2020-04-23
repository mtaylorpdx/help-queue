import React from "react";
import Ticket from "./Ticket";
import PropTypes from 'prop-types';

function Ticketlist(props){
  
  return (
    <React.Fragment>
    <hr/>
    {props.ticketList.map((ticket) =>
      <Ticket 
        whenTicketClicked = { props.onTicketSelection }
        names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        id={ticket.id}
        key={ticket.id}/>
      )}
    </React.Fragment>
  );
}

Ticketlist.propTypes = {
  ticketlist: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default Ticketlist;