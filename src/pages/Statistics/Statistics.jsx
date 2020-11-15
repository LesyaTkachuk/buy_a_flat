import React, { Component } from 'react';

class Statistics extends Component {
  componentDidMount() {
    this.props.toggleStatsPage();
  }

  componentWillUnmount() {
    this.props.toggleStatsPage();
  }

  render() {
    return <div></div>;
  }
}

export default Statistics;
