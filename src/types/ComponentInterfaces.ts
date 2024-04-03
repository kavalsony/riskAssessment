export interface startQuizComponent {
  startQuiz: () => void;
}
export type ActionType = {
  type: string;
  payload: number;
};

export interface optionData {
  title: string;
  points: number;
}

export type optionProps = {
  optionData: optionData;
  selected: boolean;
  onPress: (selecteddt: optionData) => void;
  testID: string;
};

export interface stateProps {
  next: {
    currentQuestionIndex: number;
    totalPoints: number;
  };
}
