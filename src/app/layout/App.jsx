import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import { container, Container } from 'semantic-ui-react'
import NavBar from '../../features/nav/NavBar/NavBar'
class App extends Component {
  render() {
    return (
      <div>
       <NavBar/>
          <Container className="main">
         <EventDashboard/>
      </Container>
      </div>
    );
  }
}

export default App;
