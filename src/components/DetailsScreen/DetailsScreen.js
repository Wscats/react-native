import React, { Component } from 'react';
import { Text, View, Button, Image, Switch } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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

            <ScrollView style={{ borderColor: '#58bc58', borderStyle: 'solid', borderWidth: 5, flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
                <Text>123</Text>
                </View>
                <View style={{ flex: 3, backgroundColor: 'skyblue' }}>
                    {
                        [1, 2, 3, 4, 5].map((item) => {
                            return <Image key={item} source={{
                                uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2238013674,4226662079&fm=27&gp=0.jpg'
                            }} style={{ height: 400 }} />
                        })
                    }
                </View>
                <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
                <View style={{ position: 'absolute',zIndex:20, top: 0, flex: 1, backgroundColor: 'red' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}