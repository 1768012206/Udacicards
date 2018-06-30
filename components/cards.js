import React,{Component} from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import {lightPurp, orange} from '../utils/colors'
class cards extends Component {
    render(){
        const { params } = this.props.navigation.state
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <Text>{params.data[1].title}</Text>
                <Text>{params.data[1].questions.length} quizzes</Text>
                <Button
                    title="Add Quiz"
                    color= {orange}
                    onPress={() =>
                        navigation.navigate('AddQuiz', { data: params.data})
                    }
                />
                <Button
                    title="Start Quiz"
                    color= {lightPurp}
                    onPress={() =>
                        navigation.navigate('Quiz', { data: params.data, num:0, correct:0 })
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
    }
)

export const Cards = cards