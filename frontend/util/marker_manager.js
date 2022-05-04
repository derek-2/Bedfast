export default class MarkerManager{
    constructor(map){
        this.map= map;
        this.markers= {};
        this.infoWindows={};
    }

    updateMarkers(listings){
        // debugger;
        console.log('in map!!!');
        Object.values(listings).forEach(listing => {
            if (this.markers[listing.id] === undefined){
                this.markers[listing.id]=this.createMarker(listing);
                this.infoWindows[listing.id]=this.createInfoWindow(listing);
                // console.log(this.markers[listing.id])
                this.markers[listing.id].addListener('click', () => {
                    Object.values(this.infoWindows).forEach(infoWindow => infoWindow.close())
                    // closes all other infowindows
                    this.infoWindows[listing.id].open({
                        anchor: this.markers[listing.id],
                        map: this.map,
                        shouldFocus: false
                    })
                })
                this.markers[listing.id].addListener('click', () => console.log(`clicked marker ${listing.id}`))
            }
        });
        // debugger;
    }

    createMarker(listing){
        // debugger;
        return new google.maps.Marker({
            position: {lat: listing.latitude, lng: listing.longitude},
            map: this.map,
            title: 'deez nuts',
            animation: google.maps.Animation.DROP,
            label: {
                text: `$${listing.price_per_night.toString()}`,
                fontWeight: 'bold',
                fontSize: '12'
            },
            icon: {
                url: window.roundedRectangle,
                scaledSize: new google.maps.Size(31,31),
            }
        })
    }

    createInfoWindow(listing){
        let contentString=
            (`<div class='info-window'>
                <img class='map-images' src=${listing.photoUrls[0]} />
                <div class='info-window-text'>
                    <p>${listing.title}</p>
                    <p><b>${listing.description}</b></p>
                    <p>$${listing.price_per_night} night</p>
                </div>
            </div>`
            
            )
        
        const infowindow = new google.maps.InfoWindow({
            content: contentString
        })
        return infowindow;
    }
}