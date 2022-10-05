import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface UserNameCardProps {}

const UserNameCard: FC<UserNameCardProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>UserNameCard</Text>
    </View>
  );
};

export {UserNameCard};
