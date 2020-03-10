import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardItem, Input, Button, Spinner } from './../commons';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            showSpinner: false,
            showError: false

        };
    }

    onChangeEmail = (email) => {
        this.setState({
            email
        });
    }
    onChangePassword = (password) => {
        this.setState({
            password
        });
    }

    onLogin = () => {
        this.setState({
            showSpinner: true,
            showError: false
        });
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            this.setState({
                showSpinner: false
            });
        }).catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
                this.setState({
                    showSpinner: false
                });
            }).catch(() => {
                this.setState({
                    showSpinner: false,
                    showError: true
                });
            });
        });
    }


    render() {
        const { loginContainer, errorText } = style;
        const { showError, showSpinner } = this.state;
        return (
            <View style={loginContainer}>
                <Card>
                    <CardItem>
                        <Input
                            label='Email'
                            placeholder='abc@xxx.com'
                            value={this.state.email}
                            onChangeText={this.onChangeEmail}
                        />
                    </CardItem>
                    <CardItem>
                        <Input
                            label='Password'
                            placeholder='password'
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={this.onChangePassword}
                        />
                    </CardItem>
                    {showError && <Text style={errorText}>Encountered Error</Text>}
                    <CardItem>

                        {showSpinner
                            ?
                            <Spinner />
                            :
                            < Button onPress={this.onLogin}>Login</Button>
                        }

                    </CardItem>
                </Card>
            </View >
        );
    }
}

const style = {
    loginContainer: {
        marginTop: 120,
        // marginLeft: 30,
        // marginRight: 30
    },
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default Login;
