import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface RepositoriesProps {}

const Repositories: FC<RepositoriesProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Repositories</Text>
    </View>
  );
};

export {Repositories};
