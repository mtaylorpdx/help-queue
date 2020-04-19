import React from "react";
import Ticket from "./Ticket";

const masterTicketList = [
  {
    names: 'Moose and Squirrel',
    location: '3A',
    issue: 'Boris is at it again'
  },
  {
    names: 'Jekyll and Hyde',
    location: '4B',
    issue: 'Night terrors'
  },
  {
    names: 'Tom and Jerry',
    location: '1D',
    issue: 'The usual'
  }
];



function Ticketlist(){
  return (
    <React.Fragment>
    <hr/>
    {masterTicketList.map((ticket, index) =>
      <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        key={index}/>
      )}
      </React.Fragment>
      );
}

export default Ticketlist;