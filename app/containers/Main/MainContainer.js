import React, { Component } from 'react';

export default class MainContainer extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Dangit Mom!</div>
    );
  }
}
