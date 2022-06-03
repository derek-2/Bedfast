import React from 'react';
import MarkerManager from '../../util/marker_manager';
import {mapStyle} from '../../util/map_style';

export default class Map extends React.Component{
    componentDidMount() {
        const mapOptions = {
          //40.688641, -73.960258
          center: { lat: 40.688641, lng: -73.960258 }, 
          zoom: 12,
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

      componentDidUpdate(prevProps){
        if (prevProps.match){ //check if we are navigating from the same url
          if ((this.props.match.params.city !== prevProps.match.params.city) || (this.props.match.params.guests !== prevProps.match.params.guests) || (this.props.listings !== prevProps.listings) ){
            const mapOptions = {
              //40.688641, -73.960258
              center: { lat: 40.688641, lng: -73.960258 },
              zoom: 12,
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

          }
        }
        this.MarkerManager.updateMarkers(this.props.listings);
      }


    
    render() {
      return (
        <div id={this.props.type === 'listing map' ? 'map-container2' : 'map-container'} ref={map => this.mapNode = map}> 
          </div>
      )
    }
}