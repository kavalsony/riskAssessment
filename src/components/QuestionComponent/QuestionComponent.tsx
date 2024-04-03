import React, {useState} from 'react';
import {ASSESSMENT_DATA} from '../../config/constants';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import OptionView from '../optionsComponent/OptionsComponent';
import {optionData, stateProps} from '../../types/ComponentInterfaces';
import {Dispatch} from 'redux';
import {nextQuestion} from '../../redux/actions/Actions';

type callbackfn = {
  finish: () => void;
};

const QuestionComponent = ({finish}: callbackfn) => {
  // this component is to show questions
  const quiz = ASSESSMENT_DATA; //quiz data

  const [selectedOption, setSelectedOption] = useState<optionData | null>(null);

  const dispatch: Dispatch<any> = useDispatch();

  const currentQuestionIndex = useSelector((state: stateProps) => {
    //console.log(state.next.currentQuestionIndex);
    return state.next.currentQuestionIndex;
  });

  const buttonText =
    currentQuestionIndex == quiz.length - 1 ? 'Finish' : 'Next';

  const nextButtonPress = () => {
    dispatch(nextQuestion(selectedOption?.points ? selectedOption?.points : 0));
    setSelectedOption(null);
    if (currentQuestionIndex == quiz.length - 1) {
      finish();
    }
  };

  const selectOption = (data: optionData) => {
    setSelectedOption(data);
  };

  return (
    <View>
      {currentQuestionIndex < quiz.length ? (
        <View style={styles.container}>
          <View>
            <View style={styles.questionView}>
              <Text
                style={styles.questionText}
                testID={`QueCom_QuestionText${currentQuestionIndex}`}>
                {quiz[currentQuestionIndex].question}
              </Text>
            </View>
            <View style={styles.optionsView}>
              {quiz[currentQuestionIndex].options.map((item, index) => {
                return (
                  <OptionView
                    onPress={selectOption}
                    selected={selectedOption == item}
                    optionData={item}
                    key={index}
                    testID={`QueCom_${currentQuestionIndex}question_${index}Option`}
                  />
                );
              })}
            </View>
          </View>
          {selectedOption != null ? (
            <View style={styles.nextButtonView}>
              <TouchableOpacity
                testID="QueCom_NextButton"
                onPress={() => nextButtonPress()}
                style={styles.nextButton}>
                <Text
                  style={styles.nextButtonText}
                  testID="QueCom_NextButtonText">
                  {buttonText}
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      ) : (
        <View style={styles.center}>
          <ActivityIndicator
            testID="QueCom_ActivityIndicator"
            size={'large'}
            color={'tomato'}
          />
        </View>
      )}
    </View>
  );
};
export default QuestionComponent;
