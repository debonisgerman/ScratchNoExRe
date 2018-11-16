import React, { Component } from 'react';
import './App.css';
import BotonesBuscador from './components/BotonesBuscador'
import GrillaPalabras from './components/GrillaPalabras'
import axios from 'axios';
import { ListGroup, Container, Col, Row } from 'reactstrap';


class App extends Component {
  state = {
    palabras: []
  }

  componentDidMount = () => {
    this.buscarPalabras()
  }


  buscarPalabras = () => {
    axios
      .get("/api/posicion/")
      .then(res => this.setState({ palabras: res.data }))
      .catch(err =>
        console.log("Hubo un error", err)
      );

  }




  render() {
    const { palabras } = this.state;
    return (
      <div className="App">
        <Container>
          <Row>
            <BotonesBuscador buscarPalabras={this.buscarPalabras} />
          </Row>
          <Row className="mt-50">
            <Col md="2"></Col>
            <Col md="8">
              <ListGroup>
                {palabras.map(palabra => <GrillaPalabras key={palabra._id} palabra={palabra} />)}
              </ListGroup>
            </Col>
            <Col md="2"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
