import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList
} from 'react-native';
import CategoryListItem from './components/CategoryListItem'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Dụng cụ trượt tuyết' },
        { id: 2, name: 'Quần áo trượt tuyết' },
        { id: 3, name: 'Kính mũ' },
        { id: 11, name: 'Dụng cụ trượt tuyết' },
        { id: 22, name: 'Quần áo trượt tuyết' },
        { id: 32, name: 'Kính mũ' }
      ]
    }
  }
  render() {
    const { categories } = this.state;
    return (
      <View>
          <FlatList
            data={categories}
            renderItem={({ item }) => <CategoryListItem category={item} />}
            keyExtractor={(item) => item.id.toString()} 
            contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingRight: 8,
    paddingLeft: 8,
    backgroundColor: '#FFF',
    justifyContent: 'center'
  }
})

