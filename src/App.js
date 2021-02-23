import React, { Component } from 'react';
import Container from './Components/Container/Container';
import Statistics from './Components/Statistics/Statistics';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonsName = Object.keys(this.state);

  setStats = async indx => {
    const buttonName = this.buttonsName.find((el, i) => i === indx);
    await this.setState({ [buttonName]: this.state[buttonName] + 1 });
  };

  render() {
    let countPositiveFeedbackPercentage = 0;

    const countTotalFeedback = Object.values(this.state).reduce(
      (acc, value) => {
        return acc + value;
      },
      0,
    );

    if (countTotalFeedback > 0) {
      countPositiveFeedbackPercentage = (
        (this.state.good / countTotalFeedback) *
        100
      ).toFixed(0);
    }

    return (
      <Container>
        <h1>Please leave a feedback</h1>
        <FeedbackOptions
          buttonsName={this.buttonsName}
          setStats={this.setStats}
        />
        {countTotalFeedback > 0 ? (
          <Statistics
            {...this.state}
            total={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <p>No feedback given</p>
        )}
      </Container>
    );
  }
}

export default App;
