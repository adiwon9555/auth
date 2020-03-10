import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Login from './login/Login';
import { Header, Button, Spinner, Card, CardItem } from './commons';


class App extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: null
        };
    }
    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDIKwsP1yFtYbnjuuOIVSudLs_GxbL9lyI',
            authDomain: 'authentication-fccac.firebaseapp.com',
            databaseURL: 'https://authentication-fccac.firebaseio.com',
            projectId: 'authentication-fccac',
            storageBucket: '',
            messagingSenderId: '78369891088',
            appId: '1:78369891088:web:bee1bf1a7a767e34'
        });
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    loggedIn: true
                });
            } else {
                this.setState({
                    loggedIn: false
                });
            }
        });
    }
    renderSwitch = (() => {
        switch (this.state.loggedIn) {
            case false:
                return <Login />;
            case true:
                return (
                    <Card>
                        <CardItem>
                            <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
                        </CardItem>
                    </Card>
                );
            default:
                return <Spinner size={'large'} />;
        }
    })

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderSwitch()}
            </View>
        );
    }
}


export default App;