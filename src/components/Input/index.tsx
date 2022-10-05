import React, {FC} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

interface InputProps {
  placeholder: string;
  onChangeText: ((text: string) => void) | undefined;
  value: string;
}

const Input: FC<InputProps> = ({placeholder, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.text}
        placeholderTextColor={'#00000'}
      />
    </View>
  );
};

export {Input};
