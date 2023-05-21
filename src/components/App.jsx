import React, { Component } from "react";
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import data from '../data/data.json';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

countTotalFeedback = () => {return this.state.good + this.state.neutral + this.state.bad};

countPositiveFeedbackPercentage = () => {
  return Math.round(this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad))};

changeFeedback = (id) => {
  this.setState(prevState => ({[id]: prevState[id] + 1}));
};

  render() {
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    // const options = Object.keys(this.state);
    const options = data.map((item) => ({ id: item.id, option: item.option }));
    const onLeaveFeedback = (id) => this.changeFeedback(id);

    return (
      <div>
        <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics>
        </Section>
      </div>
    );
  }
};
