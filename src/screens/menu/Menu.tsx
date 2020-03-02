import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';

import {DivTitle} from './styles';
import TextField from '../../components/textField';

const Menu = ({navigation}) => {
  const [value, setValue] = useState('');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <DivTitle>
        <Text>Digite seu nombre</Text>
      </DivTitle>
      {/* <TextInput
        placeholder="Fala seu nome que te escuto"
        style={{
          borderBottomColor: 'black',
          borderWidth: 1,
          width: 200,
          marginBottom: 20,
        }}
        onChangeText={(text: string) => setValue(text)}
    /> */}
      <TextField
        label="Digite seu nome"
        width={200}
        onChangeText={(text: string) => setValue(text)}
      />
      <Button title="Go to home" onPress={() => navigation.push('Home')} />
      <Text>Bem vindo: {value}</Text>
    </View>
  );
};

export default Menu;
