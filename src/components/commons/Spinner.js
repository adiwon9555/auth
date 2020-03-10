import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    const { spinnerContainer } = styles;
    return (
        <View style={spinnerContainer}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
}

const styles = {
    spinnerContainer: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    }
};

export { Spinner };
