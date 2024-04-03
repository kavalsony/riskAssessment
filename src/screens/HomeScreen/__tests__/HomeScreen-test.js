import * as React from 'react';
import {Provider} from 'react-redux';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Home from '../HomeScreen';
import {describe, expect, test} from '@jest/globals';
import configureStore from '../../../redux/store/store';
import Results from '../../resultsScreen/ResultsScreen';

// test('form submits two answers', () => {
//     const allQuestions = ['q1', 'q2'];
//     const mockFn = jest.fn();

//     render(<QuestionsBoard questions={allQuestions} onSubmit={mockFn} />);

//     const answerInputs = screen.getAllByLabelText('answer input');

//     fireEvent.changeText(answerInputs[1], 'a2');
//     fireEvent.press(screen.getByText('Submit'));

//     expect(mockFn).toBeCalledWith({
//       1: { q: 'q1', a: 'a1' },
//       2: { q: 'q2', a: 'a2' },
//     });
//   });
describe('Main Container Testing', () => {
  test('check start button rendering', () => {
    const store = configureStore();
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    const Home_MainContainer = screen.getByTestId('Home_MainContainer');

    expect(Home_MainContainer).toBeTruthy();
  });
  test('check start button click', () => {
    const store = configureStore();
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const startButton = screen.getByTestId('initialStartMainButton');
    expect(screen.getByTestId('initialStartText')).toBeTruthy();
    fireEvent.press(startButton);
  });
});
describe('test quiz answers and points', () => {
  test('first question', () => {
    const store = configureStore();
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const startButton = screen.getByTestId('initialStartMainButton');
    fireEvent.press(startButton);
    const que = screen.getByTestId('QueCom_QuestionText0');
    expect(que).toBeTruthy();
  });
  test('test selecting options', () => {
    const store = configureStore();
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const startButton = screen.getByTestId('initialStartMainButton');
    fireEvent.press(startButton);
    const op1 = screen.getByTestId('QueCom_0question_0Option');
    fireEvent.press(op1);
    expect(op1).toBeTruthy();
    const nextButton = screen.getByTestId('QueCom_NextButton');
    const nextButtonText = screen.getByTestId('QueCom_NextButtonText');
    expect(nextButtonText).toBeTruthy();
    fireEvent.press(nextButton);

    const op2 = screen.getByTestId('QueCom_1question_0Option');
    fireEvent.press(op2);
    expect(op2).toBeTruthy();
    fireEvent.press(screen.getByTestId('QueCom_NextButton'));

    const op3 = screen.getByTestId('QueCom_2question_0Option');
    fireEvent.press(op3);
    expect(op3).toBeTruthy();
    fireEvent.press(screen.getByTestId('QueCom_NextButton'));
  });
});
describe('Result screen test', () => {
  test('result screen param test', () => {
    const store = configureStore();
    const dt = {params: {result: 5}};
    render(
      <Provider store={store}>
        <Results route={dt} />
      </Provider>,
    );
    const res_risk_text = screen.getByTestId('res_risk_text');
    expect(res_risk_text).toBeTruthy();
  });
  test('result screen param medium risk test', () => {
    const store = configureStore();
    const dt = {params: {result: 10}};
    render(
      <Provider store={store}>
        <Results route={dt} />
      </Provider>,
    );
    const res_risk_text = screen.getByTestId('res_risk_text');
    expect(res_risk_text).toBeTruthy();
  });
  test('result screen param high risk test', () => {
    const store = configureStore();
    const dt = {params: {result: 20}};
    render(
      <Provider store={store}>
        <Results route={dt} />
      </Provider>,
    );
    const res_risk_text = screen.getByTestId('res_risk_text');
    expect(res_risk_text).toBeTruthy();
  });
});
