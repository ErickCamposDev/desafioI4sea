// @ts-nocheck
import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {getUserByName} from '../../services/api';
import styles from './styles';

interface UserProps {}

const User: FC<UserProps> = ({}) => {
  const [userName, setUserName] = useState('');

  const getUser = async () => {
    try {
      // const response = await getUserByName('ErickCamposDevsadas');
      // console.log(response._bodyBlob);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Input
        value={userName}
        placeholder={'Digite o nome do usuário'}
        onChangeText={setUserName}
      />
      <Button
        title="Buscar"
        onPress={() => {
          navigation.navigate('Repositories');
        }}
      />
    </View>
  );
};

export {User};
