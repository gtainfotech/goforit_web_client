import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Grid, Form, Divider, Button, Label, } from 'semantic-ui-react';

import './home.scss';


class HomePage extends Component {
    constructor (props) {
        
        super(props);
        
        this.state ={
            username:'',
            password: '',

        }

        this.msg = `game`;
        
        debugger;
    }

    
    render() {
        return (

            <div className="homepage">
                <Header />

                    <Grid centered className={'gridLoginDialogue'}>
                        <Grid.Column width={10} className={'columnLoginDialogue'}>
                            <Form>
                                <Form.Field>
                                <label>Username :</label>
                                <input type='text' placeholder='First name' value={this.state.value} 
                                onChange = {(event) => this.setState({username:event.target.value})}/>
                                
                                <Label pointing>Please enter a value</Label>
                                </Form.Field>
                                <Divider />

                                <Form.Field>
                                <label>Password :</label>
                                <Label pointing='below'>Please enter a value</Label>
                                <input type='text' placeholder='Last Name' onChange = {(event) => this.setState({password:event.target.value})}/>
                                </Form.Field>
                                <Divider />

                                <Button onClick={(event)=> {console.log(this.state); event.preventDefault();}}>Login</Button> <a> Forget Password </a>
                                <p>or</p>
                                <a>Login with Facebook</a> <a>Login with Google</a>

                            </Form>
                        </Grid.Column>
                    </Grid>
           
                <Footer />
            </div>

        );
    }
}

export default HomePage;