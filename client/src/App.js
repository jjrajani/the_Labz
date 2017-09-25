import React, { Component } from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';
import './App.css';

class App extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`);
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Song Society</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <Button
                            bsStyle="primary"
                            className="btn-margin"
                            onClick={this.goTo.bind(this, 'home')}
                        >
                            Home
                        </Button>
                        {!isAuthenticated() &&
                            <Button
                                bsStyle="primary"
                                className="btn-margin"
                                onClick={this.login.bind(this)}
                            >
                                Log In
                            </Button>}
                        {isAuthenticated() &&
                            <Button
                                bsStyle="primary"
                                className="btn-margin"
                                onClick={this.goTo.bind(this, 'profile')}
                            >
                                Profile
                            </Button>}
                        {isAuthenticated() &&
                            <Button
                                bsStyle="primary"
                                className="btn-margin"
                                onClick={this.logout.bind(this)}
                            >
                                Log Out
                            </Button>}
                    </Nav>
                </Navbar>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
