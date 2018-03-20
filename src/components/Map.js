import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
const MapBox = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_KEY
});

const Map = (props) => (
	<MapBox
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "50vh",
        width: "50vw",
      }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
        </Layer>
    </MapBox>
);

export default Map;