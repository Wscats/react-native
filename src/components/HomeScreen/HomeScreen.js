import React, { Component } from 'react';
import { Text, ScrollView, FlatList, StyleSheet, RefreshControl } from 'react-native';
export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      data: []
    };
  }
  async _onRefresh() {
    this.setState({ refreshing: true });
    var self = this;
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        console.log('success', JSON.parse(request.responseText).data);
        self.setState({
          data: this.state.data.concat(JSON.parse(request.responseText).data)
        })
        self.setState({ refreshing: false });
      } else {
        console.warn('error');
      }
    };
    request.open('GET', 'https://cnodejs.org/api/v1/topics');
    request.send();
  }
  async componentDidMount() {
    this._onRefresh();
  }
  onEndReached(){
    console.log('到底部')
    var self = this;
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        console.log('success', JSON.parse(request.responseText).data);
        self.setState({
          data: this.state.data.concat(JSON.parse(request.responseText).data)
        })
      } else {
        console.warn('error');
      }
    };
    request.open('GET', 'https://cnodejs.org/api/v1/topics');
    request.send();
  }
  render() {
    return (
      <FlatList
        onEndReached={this.onEndReached.bind(this)}
        onEndReachedThreshold="0.05"
        refreshControl={
        <RefreshControl
          title='下拉刷新'
          titleColor='#58bc58'
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh.bind(this)}
        />} contentContainerStyle={styles.contentContainer}
        data={this.state.data}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    padding: 20
  },
  TextStyle: {
    color: 'red',
    borderStyle: 'solid'
  }
});