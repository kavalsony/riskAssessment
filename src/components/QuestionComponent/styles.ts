import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
  },
  questionView: {
    paddingHorizontal: 10,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  optionsView: {
    marginHorizontal: 10,
  },
  nextButtonView: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 40,
  },
  nextButton: {
    paddingHorizontal: 60,
    paddingVertical: 20,
    backgroundColor: 'tomato',
    borderRadius: 15,
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  center: {
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
