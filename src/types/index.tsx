import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';

export type RootStackParamList = {
  Home: undefined;

  Results: {result: number};
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type ResultsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Results'
>;
