import React, { Component } from 'react';
import { Text, View, Button, Image, Switch } from 'react-native';
export default class DetailsScreen extends Component {
    static navigationOptions = {
        title: 'Detail',
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
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
                <Text>123</Text>
                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                        navigate('Details', { name: 'Jane' })
                    }
                />
            </View>
        );
    }
}