import React from 'react';
import MarkerManager from '../../util/marker_manager';
import {mapStyle} from '../../util/map_style';

export default class Map extends React.Component{
    componentDidMount() {
        const mapOptions = {
          //40.688641, -73.960258
          center: { lat: 40.688641, lng: -73.960258 }, 
          zoom: 11,
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyle,
          animation: google.maps.Animation.DROP,
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
        console.log('we hit update!');
      }
    
    render() {
    return (
      <div id="test">
        <div id='map-container' ref={map => this.mapNode = map}> 
                
        </div>
      </div>
    )
    }
}