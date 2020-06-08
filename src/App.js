import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import './app.css';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Work from './containers/Work';

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Navbar /> */}
        <Grid centered verticalAlign='middle'>
        <Grid.Column>
        <Route exact path="/" component={Home} />
        <Route exact path='/work' render={ () => <Work/> }/>
        {/* <Route exact path="/work" component={Work} /> */}
        </Grid.Column>
      </Grid>
      </Router>
    );
  }
  }

export default App;
