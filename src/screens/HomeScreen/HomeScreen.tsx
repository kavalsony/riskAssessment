import React, {useState} from 'react';
import {HomeScreenProps} from '../../types/NavigationProps';
import {View} from 'react-native';
import StartQuiz from '../../components/quizStarter/StartQuiz';
import QuestionComponent from '../../components/questionComponent/QuestionComponent';
import {useSelector} from 'react-redux';
import {stateProps} from '../../types/ComponentInterfaces';

const Home = ({navigation}: HomeScreenProps) => {
  const [quizStarted, setQuizStarted] = useState(false); // to store if quiz started or not

  const startTheQuiz = () => {
    setQuizStarted(true);
  };

  const currentScore = useSelector((state: stateProps) => {
    //console.log(state.next.currentQuestionIndex);
    return state.next.totalPoints;
  });

  const finishQuiz = () => {
    navigation.navigate('Results', {result: currentScore});
  };

  return (
    <View testID="Home_MainContainer">
      {!quizStarted ? (
        <StartQuiz startQuiz={startTheQuiz} />
      ) : (
        <QuestionComponent finish={finishQuiz} />
      )}
    </View>
  );
};

export default Home;
