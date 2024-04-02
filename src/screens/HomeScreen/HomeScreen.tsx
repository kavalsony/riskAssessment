import React, {useState} from 'react';
import {HomeScreenProps} from '../../types/NavigationProps';
import {Text, View} from 'react-native';
import StartQuiz from '../../components/quizStarter/StartQuiz';
import QuestionComponent from '../../components/QuestionComponent/QuestionComponent';

const Home = ({navigation}: HomeScreenProps) => {
  const [quizStarted, setQuizStarted] = useState(false); // to store if quiz started or not

  const startTheQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <View>
      {!quizStarted ? (
        <StartQuiz startQuiz={startTheQuiz} />
      ) : (
        <QuestionComponent />
      )}
    </View>
  );
};

export default Home;
