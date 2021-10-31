import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

const Button = (props) => {
    const onPress = props.onPress

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.buttonText}>{props.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        width : "100%",
        display: 'flex',
        alignItems : 'center',
        height : 50,
        backgroundColor : '#6e6e6e',
        justifyContent : 'center',
        borderRadius : 15
    },
    buttonText : {
        fontSize : 20
    }
})

export default Button;
