import React from 'react';
import MarkerManager from '../../util/marker_manager';
import {mapStyle} from '../../util/map_style';
import { getPos } from '../../util/listings_api_util';

export default class Map extends React.Component{
  constructor(props){
    super(props);
    this.generateMap = this.generateMap.bind(this);
  }
  
  componentDidMount() {
    if (this.props.type === 'listing map'){
      const {latitude, longitude} = this.props.listings[0];
      console.log(latitude, longitude)
      this.generateMap({lat: latitude, lng: longitude});
    }
    else if (this.props.match.params.location){
      getPos(this.props.match.params.location).then(res => {
        if (res.status === 'OK'){
          let center = {};
          center.lat = res.results[0].geometry.location.lat
          center.lng = res.results[0].geometry.location.lng
          this.generateMap(center);
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
          getPos(this.props.match.params.location).then(res => {
            if (res.status === 'OK'){
              let center = {};
              center.lat = res.results[0].geometry.location.lat
              center.lng = res.results[0].geometry.location.lng
              this.generateMap(center);
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
      zoom: 10,
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