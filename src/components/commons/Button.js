import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'green',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5

    }
};

export { Button };
