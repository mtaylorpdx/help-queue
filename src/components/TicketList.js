import React from "react";
import Ticket from "./Ticket";
import PropTypes from 'prop-types';

function Ticketlist(props){
  return (
    <React.Fragment>
    <hr/>
    {props.ticketList.map((ticket, index) =>
      <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        key={index}/>
      )}
    </React.Fragment>
  );
}

Ticketlist.propTypes = {
  ticketlist: PropTypes.array
};

export default Ticketlist;