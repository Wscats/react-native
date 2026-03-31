/**
 * DetailsScreen - detail view with navigation button.
 */
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

export default class DetailsScreen extends Component<NavigationScreenProps> {
  static navigationOptions = {
    title: 'Detail',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#58bc58"
      />
    ),
  };

  render(): JSX.Element {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
        <Text>123</Text>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Details', { name: 'Jane' })}
        />
      </View>
    );
  }
}