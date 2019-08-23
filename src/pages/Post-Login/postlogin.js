import React, {Component} from 'react';
import { Grid, Image, Menu, Header, Label, Input } from 'semantic-ui-react';
import Logo from '../../images/go_for_it_LOGO.svg';

import './postlogin.scss';




 
class PostLogin extends Component{
    state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    render() {

        const { activeItem } = this.state

        
        return (
            <div className="postLoginHome">
             <Grid>
                    <Grid.Column width={5}>
                   
                    <Menu vertical>
                    <Header as='h2'>
                        <Image circular src={Logo} /> Go For It Pass
                    </Header>
                        <Menu.Item name='Home' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
                        
                        Home
                        </Menu.Item>

                        <Menu.Item name='Advertisements' active={activeItem === 'spam'} onClick={this.handleItemClick}>
                        Advertisements
                        </Menu.Item>

                        <Menu.Item name='Loans' active={activeItem === 'updates'} onClick={this.handleItemClick}>
                        Loans
                        </Menu.Item>
                        <Menu.Item name='Matchings' active={activeItem === 'updates'} onClick={this.handleItemClickx}>
                        Matchings1
                        </Menu.Item>
                        <Menu.Item name='GoWallet' active={activeItem === 'updates'} onClick={this.handleItemClickx}>
                        Go Wallet
                        </Menu.Item>
                        <Menu.Item name='PublishersDesk' active={activeItem === 'updates'} onClick={this.handleItemClickx}>
                        Publisher's Desk
                        </Menu.Item>
                        <Menu.Item name='MerchantsDesk' active={activeItem === 'updates'} onClick={this.handleItemClickx}>
                        Merchant's Desk
                        </Menu.Item>
                        <Menu.Item name='Settings' active={activeItem === 'updates'} onClick={this.handleItemClickx}>
                        Settings
                        </Menu.Item>
                        
                    </Menu>
                    </Grid.Column>
                    <Grid.Column width={11}>

                    </Grid.Column>
                    
             </Grid>
            </div>
        );
    }
}

export default PostLogin;
