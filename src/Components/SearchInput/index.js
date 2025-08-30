import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchInput = props => {
  const { placeholder, returnKeyType, value, onChangeText } = props;

  return (
    <View style={styles.subContainer}>
      <TextInput
        selectionColor={'blue'}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        returnKeyType={returnKeyType}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  subContainer: {
    // paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: '#7676801F',
    // backgroundColor: 'red',
    padding: 10,
    borderRadius: 100,
    marginVertical: 10,
    height: 40,
  },

  input: {
    fontSize: 16,
    color: 'black',
    flex: 1,
    padding: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    margin: 0,
    marginVertical: 0,
  },
});

export default SearchInput;
