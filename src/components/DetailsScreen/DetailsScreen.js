import React, { Component } from 'react';
import { Text, View, Button, Image, Switch } from 'react-native';
class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('../../assets/spiro.png')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}
export default class DetailsScreen extends Component {
    static navigationOptions = {
        title: 'Detail',
        headerTitle: <LogoTitle />,
        headerRight: (
            <Button
                title="菜单"
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#58bc58"
            />
        ),
    };
    render() {
        return (

            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
                <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
                <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
            </View>
        );
    }
}