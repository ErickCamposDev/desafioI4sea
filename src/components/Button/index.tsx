import React, {FC} from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
}

const Button: FC<ButtonProps> = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export {Button};
