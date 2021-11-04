import React from 'react'
import {Button,InputGroup , ButtonGroup,ButtonToolbar,FormControl} from 'react-bootstrap';
export default function BootsrapButtonGroup() {
    return (
        <div className="my-button">
             <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups"className="my-button">
             <ButtonGroup className="me-2" aria-label="First group">
             <Button variant="secondary">1</Button>{' '}
             <Button variant="secondary">2</Button>{' '}
             <Button variant="secondary">3</Button>{' '}
             <Button variant="secondary">4</Button>
             </ButtonGroup>
             <InputGroup>
             <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
             <FormControl
             type="text"
             placeholder="Input group example"
             aria-label="Input group example"
             aria-describedby="btnGroupAddon"
            />
            </InputGroup>
            </ButtonToolbar>

            <ButtonToolbar
            className="justify-content-between"
            aria-label="Toolbar with Button groups"
            >
            <ButtonGroup aria-label="First group">
            <Button variant="secondary">1</Button>{' '}
            <Button variant="secondary">2</Button>{' '}
            <Button variant="secondary">3</Button>{' '}
            <Button variant="secondary">4</Button>
            </ButtonGroup>
            <InputGroup>
            <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
            <FormControl
            type="text"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
            />
            </InputGroup>
            </ButtonToolbar>
            <input type="text"></input>
            <input type="password"/>
            <input type="submit"/>
            <input type="search"/>
            <input type="reset"/>
            <input type="range"/>
            <input type="time"/>
            <input type="button"/>
            <input type="number"/>
            <input type="search"/>
            <input type="date"/>
            <input type="checkbox"/>
            <inpu type="Button"/>
        </div>
    )
}
