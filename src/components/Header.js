import React from "react";
import {connect} from 'react-redux';
import {Navbar, Button} from 'react-bootstrap';

const Header = ({user}) => {
    return (
        <Navbar className="justify-content-xl-between">
            <Navbar.Brand xs="auto">
                ToDo-List
            </Navbar.Brand>
            <Navbar.Collapse>
                <span className="mr-auto">
                    {user.name}
                </span>
                <Button variant="light">Exit</Button>
            </Navbar.Collapse>
        </Navbar>
    )
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);