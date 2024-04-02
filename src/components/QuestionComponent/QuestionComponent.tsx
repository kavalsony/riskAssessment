import React from 'react';
import {
  ASSESSMENT_DATA,
  highProfileRiskPoints,
  lowProfileRiskPoints,
  mediumProfileRiskPoints,
} from '../../config/constants';
import {View} from 'react-native';

const QuestionComponent = () => {
  // this component is to show questions
  const quiz = ASSESSMENT_DATA; //quiz data
  const lowRisk = lowProfileRiskPoints; // maximum points for low risk profile
  const mediumRisk = mediumProfileRiskPoints; // maximum points for medium risk
  const highRisk = highProfileRiskPoints; // maximum points for high risk profile
  return <View></View>;
};
export default QuestionComponent;
