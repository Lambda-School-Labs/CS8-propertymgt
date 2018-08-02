import React, { Component } from 'react';
import { LandingPage, Dashboard, AdminSignUp } from './Components';
import { Container, Grid, GridColumn, Gr } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

export default class Home extends Component {
  render() {
    console.log('rendering dashsboard from home');
    return (
      <div>
        <Dashboard />
        <Route path="/signup" component={AdminSignUp} />
      </div>
    );
  }
}
