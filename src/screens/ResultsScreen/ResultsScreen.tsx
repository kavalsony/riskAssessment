import React, {useEffect} from 'react';
import type {ResultsScreenProps} from '../../types/NavigationProps';
import {Text, View} from 'react-native';
import styles from './styles';
import {
  highRiskText,
  lowProfileRiskPoints,
  lowRiskText,
  mediumProfileRiskPoints,
  mediumRiskText,
} from '../../config/constants';
import {useDispatch} from 'react-redux';
import {resetQuiz} from '../../redux/actions/Actions';
const Results = ({route}: ResultsScreenProps) => {
  const {result} = route.params;
  const lowRisk = lowProfileRiskPoints; // maximum points for low risk profile
  const mediumRisk = mediumProfileRiskPoints; // maximum points for medium risk

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetQuiz());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View>
          <Text style={styles.titleText} testID="res_risk_text">
            Your Profile Risk Assessment:
          </Text>
        </View>
        <View>
          <Text style={styles.riskText} testID="res_risk_text_result">{`${
            result <= lowRisk
              ? lowRiskText
              : result <= mediumRisk
              ? mediumRiskText
              : highRiskText
          } (${result})`}</Text>
        </View>
      </View>
    </View>
  );
};
export default Results;
