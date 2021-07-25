import React from 'react'
import {Table} from 'react-bootstrap';
export default function TablePage() {
    return (
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>09/08/1995</td>
                <td>120$</td>
                <td>No</td>
                <td><button className="btn btn-outline-dark btn-sm">DETAILS</button></td>
            </tr>


            <tr>
                <td>2</td>
                <td>11/04/1995</td>
                <td>80$</td>
                <td>No</td>
                <td><button className="btn btn-outline-dark btn-sm">DETAILS</button></td>
            </tr>


            <tr>
                <td>3</td>
                <td>1/1/1995</td>
                <td>150$</td>
                <td>No</td>
                <td><button className="btn btn-outline-dark btn-sm">DETAILS</button></td>
            </tr>
        </tbody>
        </Table>
    )
}
