import React from 'react';
import MarkerManager from '../../util/marker_manager';
import {mapStyle} from '../../util/map_style';

export default class Map extends React.Component{
    componentDidMount() {
      let center = { lat: 40.688641, lng: -73.960258};
      debugger
      if (this.props.match.params.location){
        switch(this.props.match.params.location.toUpperCase()){
          case ('MIA'):
            center = {lat: 25.797349, lng:-80.244752};
            break;
          case ('ATX'):
            center = {lat: 30.267132, lng: -97.743651};
            break;
          case ('LA'):
            center = {lat: 34.051491, lng: -118.244509};
            break;
          default:
            break;
          }
      }

        const mapOptions = {
          //40.688641, -73.960258
          center,
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
          if ((this.props.match.params.location !== prevProps.match.params.location) || (this.props.match.params.guests !== prevProps.match.params.guests) || (this.props.listings !== prevProps.listings) ){
            let center = { lat: 40.688641, lng: -73.960258};
            if (this.props.match.params.location){  
              switch(this.props.match.params.location.toUpperCase()){
                case ('MIA'):
                  center = {lat: 25.797349, lng:-80.244752};
                  break;
                case ('ATX'):
                  center = {lat: 30.267132, lng: -97.743651};
                  break;
                case ('LA'):
                  center = {lat: 34.051491, lng: -118.244509};
                  break;
                default:
                  break;
              }}
            const mapOptions = {
              //40.688641, -73.960258
              center,
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