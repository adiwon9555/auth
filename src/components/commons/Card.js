import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    const { cardContainer } = styles;
    return (
        <View style={cardContainer}>
            { props.children }
        </View >
    );
};

const styles = {
    cardContainer: {
        elevation: 1,
        borderWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        backgroundColor: '#fff',

    }
};

export { Card };
