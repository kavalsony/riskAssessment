import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    //flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  optionView: {
    marginTop: 20,
    marginHorizontal: 30,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  selectedOptionView: {
    marginTop: 20,
    marginHorizontal: 30,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  optionText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  selectedOptionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
