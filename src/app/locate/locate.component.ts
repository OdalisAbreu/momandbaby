import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-locate',
  templateUrl: './locate.component.html',
  styleUrls: ['./locate.component.css']
})
export class LocateComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    mapboxgl.accessToken = environment.mapbox.key;
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-69.87107722, 18.497407],
      zoom: 14
    });

    map.on('load', function() {
      /* Image: An image is loaded and added to the map. */
      map.loadImage('https://i.imgur.com/MK4NUzI.png', function(error, image) {
        if (error) throw error;
        map.addImage('custom-marker', image);
        /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
        map.addLayer({
          id: 'markers',
          type: 'symbol',
          /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'Point',
                    coordinates: [-69.87107722, 18.497407]
                  }
                }
              ]
            }
          },
          layout: {
            'icon-image': 'custom-marker'
          }
        });
      });
    });
  }
}
