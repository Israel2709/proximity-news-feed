import React, { useState } from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import {
  Container,
  Row,
  Col,
} from 'reactstrap'

import { MainNavbar } from './app/Components/Navbar'
import { PostsList } from './features/posts/PostsLists';

function App() {
  return (
    <Router>
      <MainNavbar/>
      <Container>
        <Row>
          <Col xs="12">
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <PostsList/>
                )}
              />
              <Redirect to="/" />
            </Switch>
          </Col>
        </Row>
      </Container>

    </Router>
  );
}

export default App;