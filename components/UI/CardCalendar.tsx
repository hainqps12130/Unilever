import React from 'react'
import { StyleSheet, View } from 'react-native'

const CardCalendar = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;
}

const styles = StyleSheet.create({
    card: {
        width: 410,
        height: 500,
        // padding: 5,
        backgroundColor:"#FFFFF",
        borderRadius:20,
        marginBottom: 0 ,
       
    }
})

export default CardCalendar;