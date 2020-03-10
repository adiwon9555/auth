import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = props => {
    const { label, placeholder, onChangeText, value, secureTextEntry } = props;
    const { textInputContainer, labelText, textInput } = styles;
    return (
        <View style={textInputContainer}>
            <Text style={labelText}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                style={textInput}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
};

const styles = {
    textInputContainer: {
        flexDirection: 'row',
        flex: 1,
        height: 40,
        alignItems: 'center',

    },
    labelText: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1

    },
    textInput: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
};

export { Input };
