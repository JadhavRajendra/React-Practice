import React, { Component } from 'react'
import { Table }  from 'react-bootstrap';
import './BootsraptableExample.css';

export default class BootsraptableExample extends Component {
    render() {
        return (
            <div>
                <Table responsive="sm"className="my-h">
    <thead className="my-heding">
      <tr>
        <th>roll.no</th>
        <th>first name</th>
        <th>secomd name</th>
        <th>last name</th>
        <th>subject</th>
        <th>callage</th>
        <th>state</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>tajendra</td>
        <td>parasram</td>
        <td>jadhav</td>
        <td>math</td>
        <td>m.g.m</td>
        <td>maharastra</td>
      </tr>
      <tr>
        <td>2</td>
        <td>youraj</td>
        <td>rohidas</td>
        <td>chavan</td>
        <td>marathi</td>
        <td>m.g.m</td>
        <td>maharastar</td>
      </tr>
      <tr>
        <td>3</td>
        <td>ashok</td>
        <td>ragunath</td>
        <td>jadhav</td>
        <td>physics</td>
        <td>m.g.m</td>
        <td>maharstra</td>
      </tr>
    </tbody>
  </Table>
  <Table responsive="md"className="my-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </Table>
  <Table responsive="lg"className="my-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </Table>
  <Table responsive="xl" className="my-table">
    <thead>
      <tr>
        <th className="my-n">#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>rajendra</td>
        <td>hading</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </Table>
            </div>
        )
    }
}
