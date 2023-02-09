import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';


const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Icon name='search' style={styles.iconStyle}/>
      <TextInput 
      style={styles.inputStyle}
      placeholder='Search'
      />
    </View>
  );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#B2B2B2',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
      flex: 1,
      fontSize: 18
    },
    iconStyle: {
      fontSize: 35,
      alignSelf: 'center',
      marginHorizontal: 5
    }
});

export default SearchBar;
 