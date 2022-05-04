import React from 'react';
import MarkerManager from '../../util/marker_manager';
import {mapStyle} from '../../util/map_style';

export default class Map extends React.Component{
    componentDidMount() {
        const mapOptions = {
          center: { lat: 40.736278, lng: -73.994022 }, 
          zoom: 13,
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyle,
          options: {
            gestureHandling: 'greedy'
          }
          
        };
    
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);

        this.MarkerManager.updateMarkers(this.props.listings);

      }

      componentDidUpdate(){

        this.MarkerManager.updateMarkers(this.props.listings);
      }
    
    render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}> 
              
      </div>
    )
    }
}