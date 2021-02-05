import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import CategoryListItem from './components/CategoryListItem'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingRight:8,
    paddingLeft:8,
    backgroundColor: '#FFF',
    justifyContent: 'center'
  }
})

