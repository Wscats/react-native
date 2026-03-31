/**
 * HomeScreen - displays a list of topics from CNode API with pull-to-refresh.
 */
import React, { Component } from 'react';
import { Text, FlatList, StyleSheet, RefreshControl } from 'react-native';

/** Topic item from the CNode API. */
interface TopicItem {
  id: string;
  title: string;
  [key: string]: unknown;
}

/** Component state shape. */
interface HomeScreenState {
  refreshing: boolean;
  data: TopicItem[];
}

const API_URL = 'https://cnodejs.org/api/v1/topics';

export default class HomeScreen extends Component<{}, HomeScreenState> {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      refreshing: false,
      data: [],
    };
  }

  /** Fetch topics and append to the list. */
  private fetchTopics(showRefreshing: boolean = false): void {
    if (showRefreshing) {
      this.setState({ refreshing: true });
    }

    const request = new XMLHttpRequest();
    request.onreadystatechange = (): void => {
      if (request.readyState !== 4) return;
      if (request.status === 200) {
        const newData: TopicItem[] = JSON.parse(request.responseText).data;
        this.setState((prevState) => ({
          data: prevState.data.concat(newData),
          refreshing: false,
        }));
      } else {
        console.warn('error');
        this.setState({ refreshing: false });
      }
    };
    request.open('GET', API_URL);
    request.send();
  }

  /** Handle pull-to-refresh. */
  private onRefresh = (): void => {
    this.fetchTopics(true);
  };

  /** Handle scroll to bottom (load more). */
  private onEndReached = (): void => {
    this.fetchTopics(false);
  };

  componentDidMount(): void {
    this.fetchTopics(true);
  }

  render(): JSX.Element {
    return (
      <FlatList
        onEndReached={this.onEndReached}
        onEndReachedThreshold={0.05}
        refreshControl={
          <RefreshControl
            title="Pull to refresh"
            titleColor="#58bc58"
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
        contentContainerStyle={styles.contentContainer}
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
    padding: 20,
  },
  item: {
    padding: 10,
    fontSize: 16,
  },
});
