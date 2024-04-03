export const ASSESSMENT_DATA = [
  // usually we get these data from api but currently its not hosted anywhere so I have added static
  {
    question: 'How would you describe your investment knowledge?',
    options: [
      {
        title: 'Novice',
        points: 1,
      },
      {
        title: 'Intermediate',
        points: 2,
      },
      {
        title: 'Advanced',
        points: 3,
      },
    ],
  },
  {
    question: 'Investment Duration',
    options: [
      {
        title: 'Short-term (less than 1 year',
        points: 1,
      },
      {
        title: 'Medium-term (1-5 years)',
        points: 2,
      },
      {
        title: 'Long-term (more than 5 years)',
        points: 3,
      },
    ],
  },
  {
    question: 'How comfortable are you with taking risks?',
    options: [
      {
        title: 'Very risk-averse',
        points: 1,
      },
      {
        title: 'Somewhat risk-averse',
        points: 2,
      },
      {
        title: 'Neutral Somewhat risk-tolerant',
        points: 3,
      },
      {
        title: 'Very risk-tolerant',
        points: 4,
      },
    ],
  },
  {
    question: 'What percentage of income are you willing to invest?',
    options: [
      {
        title: 'Less than 10%',
        points: 1,
      },
      {
        title: '10-25%',
        points: 2,
      },
      {
        title: '25-50%',
        points: 3,
      },
      {
        title: 'More than 50%',
        points: 4,
      },
    ],
  },
  {
    question:
      'How would you react to a sudden drop in the value of your investments?',
    options: [
      {
        title: 'Panic and sell immediately',
        points: 1,
      },
      {
        title: 'Monitor closely and consider selling',
        points: 2,
      },
      {
        title: 'Hold and wait for recovery',
        points: 3,
      },
      {
        title: 'See it as buying oppertunity and invest more',
        points: 4,
      },
    ],
  },
  {
    question: 'Which of the following best describes your view on investing?',
    options: [
      {
        title:
          'My investments don’t have to grow, I just want my money to be safe.',
        points: 1,
      },
      {
        title: 'I can accept lower growth for greater certainty.',
        points: 2,
      },
      {
        title: 'I can accept possible losses for long-term investment growth.',
        points: 3,
      },
      {
        title:
          'To achieve high levels of growth, it is necessary to take risk.',
        points: 4,
      },
    ],
  },
  // add more questions here
];

export const lowProfileRiskPoints = 9;
export const mediumProfileRiskPoints = 15;
export const lowRiskText = 'Low Risk';
export const mediumRiskText = 'Medium Risk';
export const highRiskText = 'High Risk';

// you can define other constatns here
