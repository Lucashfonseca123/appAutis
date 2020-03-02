import React from 'react';
import {OutlinedTextField} from 'react-native-material-textfield';

export interface ITextFieldProps {
  label?: string;
  width?: number;
  onChangeText?(text: string): void;
}

export const TextField = (props: ITextFieldProps) => {
  return (
    <OutlinedTextField
      label={props.label}
      keyboardType="default"
      inputContainerStyle={{width: props.width}}
      onChangeText={props.onChangeText}
    />
  );
};

export default TextField;
