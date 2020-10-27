import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './StyleComp';
import Feather from 'react-native-vector-icons/Feather';

const TextCurrs = ({
  placeholderText,
  inputCurr,
  onTermChange,
  onTermSubmit,
}) => {
  return (
    <View style={styles.inputBarStyle}>
        <Feather
        name="search"
        color="#000"
        style={{alignSelf:'center',marginLeft:5}}
        size={30}
        />
      <TextInput
        placeholder={placeholderText}
        autoCapitalize="none"
        autoCorrect={false}
        value={inputCurr}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        style={{flex:1,marginLeft:5}}
      />
    </View>
  );
}

export default TextCurrs;
