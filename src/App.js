import React from 'react';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import Geolocater from './Geolocated.js';
import 'semantic-ui-css/semantic.css';
import './App.css';
import Map from './components/Map';

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
        <Map />
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
