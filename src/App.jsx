import React from 'react';
import Header from './Header.jsx';
import SortBar from './SortBar.jsx';
import TruckList from './TruckList.jsx'
import TruckListPaginationButton from './TruckListPaginationButton.jsx'
import AppFooter from './AppFooter.jsx'
import './App.css';

/*
  This app holds the header, footer, sort bar, offer list and pagination elements
*/
class App extends React.Component {
  PAGE_SIZE = 3;

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      sort: "pickupDate",
      order: "desc",
      shipmentOffer: []
    };

    this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
    this.handleSortClick = this.handleSortClick.bind(this);
  }

  /*
    Handles pagination when show more is clicked
  */
  handleShowMoreClick() {
    this.setState({
      offset: (this.state.offset + this.PAGE_SIZE),
      shipmentOffer: []
    }, () => this.fetchOfferData());
  }

  /*
    Handles when the user wants to sort by different criteria: price, miles, etc
  */
  handleSortClick(eventKey){
    this.setState({
      offset: 0,
      sort: eventKey.split(".")[1],
      order: eventKey.split(".")[0],
      shipmentOffer: []
    }, () => this.fetchOfferData());
  }

  /*
    Load data for initial render
  */
  componentDidMount() {
    this.fetchOfferData();
  }

  /*
    Makes a network request in order to fetch offer data from convoy
  */
  fetchOfferData(){
    // url has cors-anywhere in the beginning to handle CORS preflight issues
    const url = 'https://cors-anywhere.herokuapp.com/https://convoy-mock-api.herokuapp.com/offers';
    const params = new URLSearchParams();
    params.append("limit",this.PAGE_SIZE);
    params.append("offset",this.state.offset);
    params.append("sort",this.state.sort);
    params.append("order",this.state.order);

    var requestOptions = {
      method: 'GET',
      headers: new Headers()
    };

    fetch(url + "?" + params.toString(), requestOptions)
      .then(response => {
        if(response.ok){
          return response.json();         
        }
        throw new Error('Non 2xx response returned from server');
      })
      .then(result => {
        this.setState({shipmentOffer: result});
      })
      .catch(error => console.log('error', error));
  }



  render() {
    return (
      <div id="appHolder">
        <div id="nonFooterHolder">
          <Header> </Header>
          <SortBar handleSortClick={this.handleSortClick}> </SortBar>
          <TruckList shipmentOffer = {this.state.shipmentOffer}> </TruckList>
          <TruckListPaginationButton handleShowMoreClick={this.handleShowMoreClick}> </TruckListPaginationButton>
        </div>
        <AppFooter> </AppFooter>
      </div>
    );
  }
}


export default App;
