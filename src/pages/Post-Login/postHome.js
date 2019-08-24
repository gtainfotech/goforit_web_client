import React, {Component} from 'react';
import { Grid, Image, Menu, Header, Icon, Label, Input, Container, Search, } from 'semantic-ui-react';
import Logo from '../../images/go_for_it_LOGO.svg';

import './postlogin.scss';




 
class PostHome extends Component{
    state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    render() {

        const { activeItem } = this.state
       // const { isLoading, value, results } = this.state

        
        return (
            // post login home page
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
                    <Grid.Column width={11} className='postLoginHomeContent'>
                        <Menu>
                            <Menu.Item><Icon name='bars' size='large' /></Menu.Item>
                                <Menu.Menu position='right'>
                                <Menu.Item><Icon name='bell' size='large' /></Menu.Item>
                                <Menu.Item><Icon name='mail' size='large' /></Menu.Item>
                                <Menu.Item><Icon name='user circle' size='large' /></Menu.Item>
                                <Menu.Item>USERNAME</Menu.Item>
                                </Menu.Menu>
                        
                        </Menu>

                        <Container>
                        <Header as='h2'>
                            Go Search
                        </Header>
                        <Search
                            input={{ icon: 'search', iconPosition: 'left' }}
                            
                        />                    



                        </Container>

                        <Container className='homeContentContainer'>
                            <Grid>
                                <Grid.Column width={6}>
                                    <Header as ='h2'>
                                        ADD Name
                                    </Header>
                                    <p>
                                        ADD Description
                                    </p>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Header as ='h2'>
                                        ADD Name
                                    </Header>
                                    <p>
                                        ADD Description
                                    </p>
                                </Grid.Column>
                                <Grid.Column width={4} className='filters'>
                                    <Header as ='h2' className='headerFilter'>
                                        Applied filters
                                    </Header>
                                    
                                </Grid.Column>
                            </Grid>


                        </Container>

                    </Grid.Column>
                    
             </Grid>
            </div>
        );
    }
}

export default PostHome;
