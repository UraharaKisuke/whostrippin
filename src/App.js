import React, {useState, useEffect} from 'react';
import * as _ from 'lodash'

//Styles
import './App.css';

//Assets
import mp4 from './video/video.mp4'
import { DebounceInput } from "react-debounce-input";

//Components
import ArtistCard from './components/ArtistCard.js'
import EventsTable from './components/EventsTable.js'

//Constants
const API = "https://rest.bandsintown.com/artists/";
const APP_ID = "123123";
const ENTER_KEY = 13;



function App() {
  //Initializing States with their initial values
 const [artistName, setartistName] = useState();
 const [artist, setartist] = useState(null);
 const [artistEvents, setartistEvents] = useState(null);
 const [noResult, setnoResult] = useState(null);

// Calling two functions in a promise and it will resolve them both and then 
// set respective states to the reponse. This helps synchronizing the UI. 
 const getDataByArtistName = () => {
  if (artistName) {
    Promise.all([getArtist(), getArtistEvents()]).then(response => {
      if (response) {
        setartist(response[0]);
        setartistEvents(response[1]);
        setnoResult(_.isEmpty(response[0]));
      }
    });
  }
};
// Calling bandsinTown API to get Artist's data 
const getArtist = async () => {
  return fetch(`${API}${artistName}/?app_id=${APP_ID}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);
};
// Calling bandsinTown API to get Artist's events
const getArtistEvents = async () => {
  return fetch(`${API}${artistName}/events/?app_id=${APP_ID}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);
};

// Setting the state to the value as it is typed in real time
const handleInputChange = (e) => {
  setartistName(e.target.value);

};

// Handling Enter key pressing. Calling the function if it is pressed.
const handleKeyDown = (e) => {
  if (e.key === ENTER_KEY) {
    getDataByArtistName();
  }
}

//useEffect hook is a replacement for lifecycle methods in modern react.
//whenever any input is typed and state changes, it calls the function.
useEffect(() => {
  getDataByArtistName();
  
}, [artistName])

  return (
    /*Adding a Video Background in loop. */
    <div className="App">
      
     <video
     className="video-container"
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          width: "100%",
          left: 0,
          top: 0,
          opacity: "0.8",
          zIndex:"-1",
          objectFit: "cover"
        }}
      >
        <source src={mp4} type="video/mp4" />
      </video>

        <div className="container-fluid">
          <div className="form-group col-sm-12 col-xl-3 pt-4 p-0">
              {/* Using DebouncedInput Component to refresh it after some time and call function. */}
            <DebounceInput
              className="form-control"
              placeholder="Search Artists on Trips"
              onChange={(e)=> handleInputChange(e)}
              onKeyDown={(e)=> handleKeyDown(e)}
              minLength={1}
              debounceTimeout={600}
              value={artistName}
            />
            
          </div>

          {artist ?  //Using a ternary opertator to conditionally render components.
            <div className="row">
              <ArtistCard artist={artist} />
              <EventsTable events={artistEvents} />
            </div>
          : ''}

          {noResult && ( //using another way to conditionally render.
            <h2 className="alert-light text-center">Sorry, We couldn't find any artist with that name.</h2>
          )}
        </div>

    </div>
  );
}

export default App;
