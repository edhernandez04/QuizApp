import React from 'react'
import { View, StyleSheet, StatusBar, Text  } from 'react-native'
import TEMP_QUESTIONS from '../data/computers'

class Quiz extends React.Component {
    render(){
        const question = TEMP_QUESTIONS[0]
        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <Text style={styles.text}>{question.question}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#36B1F0',
        flex: 1
    },
    text: {

    }
})

export default Quiz