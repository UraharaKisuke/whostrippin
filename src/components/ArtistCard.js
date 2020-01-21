import React from 'react'

//Styles
import '../styles/artistCard.css'


const ArtistCard = (props) =>{

const {artist} = props;
// Destructring to extract multiple pieces of data from an array or object and assign them to their own variables.

    return(
    <div className="col-xs-12 col-lg-4 mb-4">
    <div className="card">
      <img
        className="card-img-top"
        src={artist.image_url}
        alt="Artist Pic"
      />
      <div className="card-body">
        <h5 className="card-title">{artist.name}</h5>
        <p className="card-text">{artist.facebook_page_url}</p>
        <a href={artist.facebook_page_url} className="btn btn-primary">
          Facebook Profile
        </a>
      </div>
    </div>
  </div>
  );



}
export default ArtistCard
