import React from 'react';
import { Input } from 'react-native-elements';

export interface ITextFieldProps {
  placeholder?: string;
  placeholderTextColor?: string;
  textAlign?: "auto" | "center" | "left" | "right" | "justify" | undefined;
  width?: number;
  onChangeText?(text: string): void;
  fontColor?: string;
  fontSize?: number;
  disabledBorderBottom?: boolean;
  borderBottomColor?: string;
  marginBottom?: number;
}

export const TextField = (props: ITextFieldProps) => {
  return (
    <Input placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      style={{ textAlign: props.textAlign, }}
      inputStyle={{
        textAlign: props.textAlign,
        fontFamily: 'showcard-gothic',
      }}
      inputContainerStyle={{
        borderBottomColor: props.borderBottomColor,
        borderBottomWidth: props.disabledBorderBottom ? 0 : 1,
        marginBottom: props.marginBottom
      }}
      onChangeText={props.onChangeText}
    />
  );
};

export default TextField;
