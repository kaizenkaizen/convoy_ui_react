import React from 'react';
import './TruckListPaginationButton.css';

// This is the code for the show more button
function TruckListPaginationButton(props){

  return (
    <div id="truckListPaginationButton">
      <button id="truckListShowMore" onClick={props.handleShowMoreClick}> Show More </button>
    </div>
  );
}

export default TruckListPaginationButton;
