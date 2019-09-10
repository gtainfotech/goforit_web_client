import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Grid, Form, Divider, Button, Label, } from 'semantic-ui-react';

import './home.scss';


class HomePage extends Component {
    render() {
        return (

            <div className="homepage">
                <Header />

                    <Grid centered className={'gridLoginDialogue'}>
                        <Grid.Column width={10} className={'columnLoginDialogue'}>
                            <Form>
                                <Form.Field>
                                <label>Username :</label>
                                <input type='text' placeholder='First name' />
                                <Label pointing>Please enter a value</Label>
                                </Form.Field>
                                <Divider />

                                <Form.Field>
                                <label>Password :</label>
                                <Label pointing='below'>Please enter a value</Label>
                                <input type='text' placeholder='Last Name' />
                                </Form.Field>
                                <Divider />

                                <Button>Login</Button> <a> Forget Password </a>
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