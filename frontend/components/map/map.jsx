import React from 'react';
import MarkerManager from '../../util/marker_manager';

export default class Map extends React.Component{
    componentDidMount() {
        // set the map to show SF 40.736278, -73.994022
        

        const mapOptions = {
          center: { lat: 40.736278, lng: -73.994022 }, // this is SF
          zoom: 13,
          disableDefaultUI: true,
          zoomControl: true,
          // styles:
        };
    
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        debugger;
        this.MarkerManager.updateMarkers(this.props.listings);

      }

      componentDidUpdate(){
        debugger;
        this.MarkerManager.updateMarkers(this.props.listings);
      }
    
    render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}> 
              
      </div>
    )
    }
}