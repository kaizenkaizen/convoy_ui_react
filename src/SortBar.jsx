import React from 'react';
import './SortBar.css';
import Dropdown from 'react-bootstrap/Dropdown';

/*
  This allows the user to sort based on Price, Miles, etc
*/
class SortBar extends React.Component {

  constructor(props) {
    super(props);
    // This shows what has been selected in the sort bar
    this.state = {
      sortDisplay: "Latest Pickup Date"
    };

    this.onSortSelect = this.onSortSelect.bind(this);
    this.onSortClick = this.onSortClick.bind(this);
  }

  /*
    Whenever sort is clicked, a network request is made to resort the items.
    This informs the parent component this has happened.
  */
  onSortSelect(eventKey){
    this.props.handleSortClick(eventKey);
  }

  /*
    Update the sort bar to show what has been selected to sort on
  */
  onSortClick(e){
    this.setState({
      sortDisplay: e.target.innerText
    });
  }

  render() {
    return (
      <div id="convoySortBar">
        <div id="sortByText">Sort by:</div>
        <Dropdown onSelect={this.onSortSelect}>
          <Dropdown.Toggle variant="secondary" id="sortOfferDropdown">
          {this.state.sortDisplay}
          </Dropdown.Toggle>

          <Dropdown.Menu onClick={this.onSortClick} className="reactBootstrapDropdownItem">
            <Dropdown.Item eventKey="desc.pickupDate" className="reactBootstrapDropdownItem">Latest Pickup Date</Dropdown.Item>
            <Dropdown.Item eventKey="asc.pickupDate" className="reactBootstrapDropdownItem">Earliest Pickup Date</Dropdown.Item>
            <Dropdown.Item eventKey="desc.dropoffDate" className="reactBootstrapDropdownItem">Latest Dropoff Date</Dropdown.Item>
            <Dropdown.Item eventKey="asc.dropoffDate" className="reactBootstrapDropdownItem">Earliest Dropoff Date</Dropdown.Item>
            <Dropdown.Item eventKey="desc.price" className="reactBootstrapDropdownItem">Highest Offer Price</Dropdown.Item>
            <Dropdown.Item eventKey="asc.price" className="reactBootstrapDropdownItem">Lowest Offer Price</Dropdown.Item>
            <Dropdown.Item eventKey="desc.origin" className="reactBootstrapDropdownItem">Origin Descending</Dropdown.Item>
            <Dropdown.Item eventKey="asc.origin" className="reactBootstrapDropdownItem">Origin Ascending</Dropdown.Item>
            <Dropdown.Item eventKey="desc.destination" className="reactBootstrapDropdownItem">Destination Descending</Dropdown.Item>
            <Dropdown.Item eventKey="asc.destination" className="reactBootstrapDropdownItem">Destination Ascending</Dropdown.Item>
            <Dropdown.Item eventKey="desc.miles" className="reactBootstrapDropdownItem">Highest Miles</Dropdown.Item>
            <Dropdown.Item eventKey="asc.miles" className="reactBootstrapDropdownItem">Lowest Miles</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}


export default SortBar;
