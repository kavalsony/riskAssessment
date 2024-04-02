import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {startQuizComponent} from '../../types/ComponentInterfaces';
const StartQuiz = ({startQuiz}: startQuizComponent) => {
  // to show start quiz button. I have aded text directly here, instead of this we should have some text management with multi language
  return (
    <View style={styles.container}>
      <View style={styles.centerView}>
        <Text style={styles.informationText}>
          {
            'To calculate Risk Management we have created a questionaire. Please start the quiz from below.'
          }
        </Text>
        <TouchableOpacity
          onPress={() => startQuiz()}
          style={styles.startQuizButton}>
          <Text>{'Start Quiz'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default StartQuiz;
