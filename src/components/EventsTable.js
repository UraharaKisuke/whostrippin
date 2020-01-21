import React from 'react'
//Styles
import '../styles/eventsTable.css'
//Assets
import moment from 'moment'


//Events Container Component
const EventsTable = (props) => {
const {events} = props;

    return(

        <div className="col-sm-12 col-xl-8">
        {events != null && events.length > 1 ? (
          <table className="table">
            <thead className="thead-dark opacity">
              <tr>
                <th scope="col">Venue</th>
                <th scope="col">City</th>
                <th scope="col">Country</th>
                <th scope="col">datetime</th>
              </tr>
            </thead>
            <tbody className="background">
                {/* Mapping the events */}
              {events.map((event, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{event.venue.name}</th>
                    <td>{event.venue.city}</td>
                    <td>{event.venue.country}</td>
                    <td>
                      {moment(event.datetime).format("h:mm a,dddd, MMMM Do YYYY")}  {/* formating date */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h2 className="alert-light text-center">no events found</h2>
        )}
      </div>




    );
}
export default EventsTable