import React from 'react';
import './TruckList.css';

class TruckList extends React.Component {


  constructor(props) {
    super(props);

    // This state renders a list of trucking offers
    this.state = {
      shipmentOffer: props.shipmentOffer,
    };
  }

  // This is because i'm only using Date.prototype
  // which is built into the browser
  convertDayNumberToString(day){
    switch(day){
      case 0:
        return "Sun"
      case 1:
        return "Mon"
      case 2:
        return "Tue"
      case 3:
        return "Wed"
      case 4:
        return "Thu"
      case 5:
        return "Fri"
      case 6:
        return "Sat"
      default:
        return "NaN"
    }
  }

  // This is because i'm only using Date.prototype
  // which is built into the browser
  convertNumberToMinute(minute){
    if (minute < 10){
      return '0' + minute;
    }else{
      return minute;
    }
  }

  // This maps from an offer to a row which displays all information about the trucking offer
  createRouteElement(convertDayNumberToString, convertNumberToMinute){
    
    return this.props.shipmentOffer.map( (offer,index) => {
      
      const originPickupStart = new Date(offer.origin.pickup.start);
      const originPickupEnd = new Date(offer.origin.pickup.end);
      const destinationDropoffStart = new Date(offer.destination.dropoff.start);
      const destinationDropoffEnd = new Date(offer.destination.dropoff.end);
      const originPickupDay = convertDayNumberToString(originPickupStart.getUTCDay());
      const destinationDropoffDay = convertDayNumberToString(destinationDropoffStart.getUTCDay());
      const originPickupDate = originPickupStart.getUTCDate();
      const originPickupMonth = originPickupStart.getUTCMonth() + 1;
      const destinationDropoffDate = destinationDropoffStart.getUTCDate();

      const destinationDropoffMonth = destinationDropoffStart.getUTCMonth() + 1;
      const originPickupStartHour = originPickupStart.getUTCHours();
      const originPickupEndHour = originPickupEnd.getUTCHours();
      const destinationDropoffStartHour = destinationDropoffStart.getUTCHours();
      const destinationDropoffEndHour = destinationDropoffEnd.getUTCHours();

      const originPickupStartMinute = convertNumberToMinute(originPickupStart.getUTCMinutes());
      const originPickupEndMinute = convertNumberToMinute(originPickupEnd.getUTCMinutes());
      const destinationDropoffStartMinute = convertNumberToMinute(destinationDropoffStart.getUTCMinutes());
      const destinationDropoffEndMinute = convertNumberToMinute(destinationDropoffEnd.getUTCMinutes());
  
      return (
        <div className = "routeAndDividerHolder" key={"routeAndDividerHolder" + index.toString()}>
          <div className="routeElement" key={"routeElement" + index.toString()}>
            <div className="locationStepperAndLocationHolder" key={"locationStepperAndLocationHolder" + index.toString()}>
              <div className="locationStepper" key={"locationStepper" + index.toString()}>
                <div className="firstBall" key={"firstBall" + index.toString()}> </div>
                <div className="connectingLine" key={"connectingLine" + index.toString()}> </div>
                <div className="secondBall" key={"secondBall" + index.toString()}> </div>
              </div>
              <div className="locationHolder" key={"locationHolder" + index.toString()}>
                <div className ="originLocationTruckTypeMilesPrice" key={"originLocationTruckTypeMilesPrice" + index.toString()}>
                  <div className = "originLocation" key={"originLocation" + index.toString()}>{offer.origin.city}, {offer.origin.state}</div>
                  <div className ="truckTypeMilesPrice" key={"truckTypeMilesPrice" + index.toString()}>
                    <div className ="miles" key={"miles" + index.toString()}>{offer.miles} miles</div>
                    <div className ="price" key={"price" + index.toString()}>${offer.offer.toFixed(2)}</div>
                  </div>
                </div>
                <div className="pickupStartAndEnd">{originPickupDay} {originPickupMonth}/{originPickupDate} {originPickupStartHour}:{originPickupStartMinute} - {originPickupEndHour}:{originPickupEndMinute}</div>
                <div className="destinationLocation">{offer.destination.city}, {offer.destination.state}</div>
                <div className="destinationStarAndEnd">{destinationDropoffDay} {destinationDropoffMonth}/{destinationDropoffDate} {destinationDropoffStartHour}:{destinationDropoffStartMinute} - {destinationDropoffEndHour}:{destinationDropoffEndMinute}</div>
              </div>
            </div>
          </div>
          <div className = "offerDivider"> </div>
        </div>
      )
    })
  }


  render() {
    return (
      <div id="convoyTruckList">
        {this.createRouteElement(this.convertDayNumberToString, this.convertNumberToMinute)}
      </div>
    );
  }
}


export default TruckList;
