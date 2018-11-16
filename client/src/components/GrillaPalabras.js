import React, { Component } from 'react'
import { ListGroupItem, Badge } from 'reactstrap';

class GrillaPalabras extends Component {

    render() {
        const { palabra } = this.props;
        return (
            <ListGroupItem className="justify-content-between">
                {palabra.palabra} fue buscado
                <Badge className="ml-20" pill>{palabra.cantidad > 1 ? palabra.cantidad + " veces" : palabra.cantidad + " vez"} </Badge>
            </ListGroupItem>
        )
    }
}
export default GrillaPalabras;