import { Component } from 'react';
import axios from "axios";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Login from './Login';
state = {
    produtos: []

}


axios.get(`http://localhost/nova-trilha/public/api/login.php`)
    .then(res => {
        const produtos = res.data;
        this.setState({ produtos });
        console.log(produtos)

    }
    )

export default function Produtos() {
    return (


        <h1> ola</h1>


    )

};


