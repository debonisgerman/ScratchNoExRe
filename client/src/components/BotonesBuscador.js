import React, { Component } from 'react';
import { Button, Row, Col, Container } from 'reactstrap';
import axios from 'axios';

class BotonesBuscador extends Component {
    state = {
        TELEFE: '',
        VIACOM: '',
        JAVA: ''
    }
    buscarPosicion = (palabra) => {
        axios
            .post(`/api/posicion/${palabra}`)
            .then(res => this.mostrarValores(res.data, palabra))
            .catch(err =>
                console.log("Hubo un error", err)
            );
    }

    mostrarValores = (data, cual) => {

        let posiciones = "[" + data.join("],[") + "]";
        this.setState({
            [cual]: posiciones
        });
        this.props.buscarPalabras();

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className="textCenter" md="4">
                        <Button onClick={() => this.buscarPosicion('TELEFE')} color="info">
                            Buscar TELEFE
                        </Button>
                        <div className={this.state.TELEFE ? '' : 'hide'}>
                            {this.state.TELEFE}
                        </div>
                    </Col>
                    <Col className="textCenter" md="4">
                        <Button onClick={() => this.buscarPosicion('VIACOM')} color="info">
                            Buscar VIACOM
                        </Button>
                        <div className={this.state.VIACOM ? '' : 'hide'}>
                            {this.state.VIACOM}
                        </div>
                    </Col>
                    <Col className="textCenter" md="4">
                        <Button onClick={() => this.buscarPosicion('JAVA')} color="info">
                            Buscar JAVA
                        </Button>
                        <div className={this.state.JAVA ? '' : 'hide'}>
                            {this.state.JAVA}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BotonesBuscador;