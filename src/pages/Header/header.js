import React, {Component} from 'react';
import './header.css';
import Logo from '../../images/go_for_it_LOGO.svg';
import{ Menu } from 'semantic-ui-react';
 
class Header extends Component{
    render(){
        return (
    
            <header className="header ui grid">
                    <div className="headerContainer menu">
                        <div className="logoContainer">
                            <img src={Logo} alt='logo'/>
                        </div>
                        
                        <div className="loginContainer"></div>
                     </div>

                
                     <Menu>

                        <Menu.Menu>
                            <Menu.Item>Pricing</Menu.Item>
                            <Menu.Item>Sign Up</Menu.Item>
                            <Menu.Item>Guest Login</Menu.Item>
                        </Menu.Menu>

                     </Menu>
                
                   
            </header> 
        );
    }
}

export default Header;
