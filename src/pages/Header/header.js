import React, {Component} from 'react';
import './header.css';
import Logo from '../../images/go_for_it_LOGO.svg';
import{ Menu } from 'semantic-ui-react';
 
class Header extends Component{
    state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        const { activeItem } = this.state
        return (
    
            <header className="header">
                    <div className="headerContainer menu">
                        <div className="logoContainer">
                            <img src={Logo} alt='logo'/>
                        </div>
                        
                        <div className="loginContainer"></div>
                     </div>

                
                    

                     <Menu>
                        <Menu.Item
                            name='editorials'
                            active={activeItem === 'editorials'}
                            onClick={this.handleItemClick}
                        >
                        Editorials
                        </Menu.Item>

                        <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
                        Reviews
                        </Menu.Item>

                        <Menu.Item
                        name='upcomingEvents'
                        active={activeItem === 'upcomingEvents'}
                        onClick={this.handleItemClick}
                        >
                        Upcoming Events
                        </Menu.Item>
                    </Menu>

                     
                
                   
            </header> 
        );
    }
}

export default Header;
