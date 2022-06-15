import React from 'react';
import MarkerManager from '../../util/marker_manager';
import {mapStyle} from '../../util/map_style';

export default class Map extends React.Component{
  constructor(props){
    super(props);
    this.generateMap = this.generateMap.bind(this);
  }
  
  componentDidMount() {
    if (this.props.type === 'listing map'){
      const {latitude, longitude} = this.props.listings[0];
      this.generateMap({lat: latitude, lng: longitude});
    }
    else if (this.props.match.params.location){
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({address: this.props.match.params.location}, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK){
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();
          this.generateMap({lat, lng})
        } else {
          this.generateMap({lat: 40.688641, lng: -73.960258})
        }
      })
    } else {
      this.generateMap({lat: 40.688641, lng: -73.960258})
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.type === 'listing map'){
      const {latitude, longitude} = this.props.listings[0];
      this.generateMap({lat: latitude, lng: longitude});
    }
    else if (prevProps.match){ //check if we are navigating from the same url
      if ((this.props.match.params.location !== prevProps.match.params.location) || (this.props.match.params.guests !== prevProps.match.params.guests) || (this.props.listings !== prevProps.listings) ){
        if (this.props.match.params.location){
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({address: this.props.match.params.location}, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK){
              const lat = results[0].geometry.location.lat();
              const lng = results[0].geometry.location.lng();
              this.generateMap({lat, lng})
            } else {
              this.generateMap({lat: 40.688641, lng: -73.960258})
            }
          })
      } else {
        this.generateMap({lat: 40.688641, lng: -73.960258})
      }
    }
  }
  }

  generateMap(posObj){
    const mapOptions = {
      center: posObj,
      zoom: 11,
      disableDefaultUI: true,
      zoomControl: true,
      styles: mapStyle,
      animation: google.maps.Animation.DROP,
      options: {
        gestureHandling: 'greedy'
      }
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings);
  }
    
  render() {
    return (
      <div id={this.props.type === 'listing map' ? 'map-container2' : 'map-container'} ref={map => this.mapNode = map}> 
        </div>
    )
  }
}