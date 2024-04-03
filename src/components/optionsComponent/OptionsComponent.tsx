import React from 'react';
import styles from './styles';
import {Text, TouchableOpacity, View} from 'react-native';
import {optionProps} from '../../types/ComponentInterfaces';

const OptionView = ({optionData, selected, onPress, testID}: optionProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(optionData)}
      testID={testID}
      style={selected ? styles.selectedOptionView : styles.optionView}>
      <Text style={selected ? styles.selectedOptionText : styles.optionText}>
        {optionData.title}
      </Text>
    </TouchableOpacity>
  );
};
export default OptionView;
