import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    //flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationText: {
    paddingHorizontal: 40,
    textAlign: 'center',
    fontSize: 17,
    marginBottom: 20,
    color: '#000',
  },
  startQuizButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
