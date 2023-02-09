import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';


const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Icon name='done'/>
      <Text>Search Bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'grey',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15
    }
});

export default SearchBar;
