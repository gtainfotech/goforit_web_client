import React, {Component} from 'react';
import './header.scss';
import Logo from '../../images/go_for_it_LOGO.svg';
import {Menu, Segment} from "semantic-ui-react";

 
class Header extends Component{
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {

        const { activeItem } = this.state
        return (
            <div className="home-menu">

                <Segment inverted>
                    <div className="logoContainer">
                        <img src={Logo} alt='logo' />
                    </div>
                    <div className="menuContainer">
                        <Menu inverted secondary>
                            <Menu.Item
                                name='Pricing'
                                active={activeItem === 'Pricing'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='Sign Up'
                                active={activeItem === 'Sign Up'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='Guest Login'
                                active={activeItem === 'Guest Login'}
                                onClick={this.handleItemClick}
                            />
                        </Menu>
                    </div>
                </Segment>

            </div>
        );
    }
}

export default Header;
