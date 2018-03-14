import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import Geolocater from './Geolocated.js';
import 'semantic-ui-css/semantic.css';
import './App.css';

const Map = ReactMapboxGl({
  accessToken: ""
});

const App = (props) => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          I Eat the Food
        </Menu.Item>
      </Container>
    </Menu>
    
    <Container text className="centered" style={{ marginTop: '7em' }}>
      <Header as='h1' className="centered">I Eat the Food</Header>
      <Header style={{ marginBottom: '3em' }} className="centered">Our complex algos will tell you where you want to eat.</Header>
    </Container>
    
    <Container text className="centered">
        <Geolocater />
    </Container>
    
    <Container text className="centered">
        <Map
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
        </Map>
    </Container>

    <Segment
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
      <Container textAlign='center'>
        <List horizontal inverted divided link>
          <List.Item as='a' href='#'>Site Map</List.Item>
          <List.Item as='a' href='#'>Contact Us</List.Item>
          <List.Item as='a' href='#'>Terms and Conditions</List.Item>
          <List.Item as='a' href='#'>Privacy Policy</List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default App;
