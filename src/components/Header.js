import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#">Тарифы такси</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">На главную</Nav.Link>
                            <Nav.Link href="#action2">Подписка</Nav.Link>
                            <NavDropdown title="Прочее" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Поиск по сайту"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Искать</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    };
}

export default Header;