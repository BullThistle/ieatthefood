import React from 'react';
import { Header } from 'semantic-ui-react';

class Recommendation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurant: { name: "Fetching restaurant..." },
      error: false
    };
  }

  componentDidMount() {
    this.callApi()
      .then((res) => {
        console.log("success!");
        console.log(res.restaurant);
        this.setState({ restaurant: res.restaurant })
      })
      .catch((err) => {
        console.error(err);
        this.setState({ error: true });
      });
  }

  async callApi() {
    const response = await fetch(
      `/api/restaurant?latitude=${this.props.latitude}&longitude=${this.props.longitude}`
    );
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render() {
    return (
      <Header>
        { this.state.error ? "Cannot fetch restaurant" : this.state.restaurant.name}
      </Header>
    );
  }
}

export default Recommendation;
