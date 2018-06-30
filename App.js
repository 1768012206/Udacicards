/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {
    StyleSheet,
    Button,
} from 'react-native'
import {} from 'expo'
import {initData} from './utils/api'
import {Decks} from './components/decks'
import {Cards} from './components/cards'
import {Quiz} from './components/quiz'
import {Answer} from './components/answer'
import {Result} from './components/result'
import {AddDeck} from './components/addDeck'
import {AddQuiz} from './components/addQuiz'
import {StackNavigator} from "react-navigation";
const Main = StackNavigator ({
    Decks: {screen:Decks},
    Cards: {screen: Cards},
    Quiz: {screen: Quiz},
    Result: {screen: Result},
    Answer: {screen:Answer},
    AddDeck: {screen:AddDeck},
    AddQuiz: {screen:AddQuiz},
}, {
    navigationOptions:({navigation}) => ({
        title: 'Udacicards',
        headerRight: <Button title="add deck"
                             onPress={() =>
                                 navigation.navigate('AddDeck')

                             }/>
    }),
    initialRouteName: 'Decks',


})
type Props = {};
export default class App extends Component<Props> {
    constructor() {
        super()
        this.state={

        }
    }

    componentDidMount() {
        initData({
            React: {
                title: 'React',
                questions: [
                    {
                        question: 'What is React?',
                        answer: 'A library for managing user interfaces'
                    },
                    {
                        question: 'Where do you make Ajax requests in React?',
                        answer: 'The componentDidMount lifecycle event'
                    }
                ]
            },
            JavaScript: {
                title: 'JavaScript',
                questions: [
                    {
                        question: 'What is a closure?',
                        answer: 'The combination of a function and the lexical environment within which that function was declared.'
                    }
                ]
            }
        })
    }


    render(){
        return (
            <Main/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deck: {
        height: 50,
        width: 50,
        backgroundColor: '#e76e63',
        margin: 10,
    }
})
