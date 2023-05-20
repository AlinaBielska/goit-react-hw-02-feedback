import React, { Component } from "react";
import css from './Feedback.module.css';

class Feedback extends Component {
    constructor() {
        super();

        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        } 
    };

    changeFeedback = (type) => {
        this.setState(prevState => ({ [type]: prevState[type] + 1 }));
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round(this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad));
    }

    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <ul className={css.buttonsFeedback}>
                    <li><button type="button" onClick={() => this.changeFeedback("good")}>Good</button></li>
                    <li><button type="button" onClick={() => this.changeFeedback("neutral")}>Neutral</button></li>
                    <li><button type="button" onClick={() => this.changeFeedback("bad")}>Bad</button></li>
                </ul>
                <h2>Statistics</h2>
                <ul className={css.buttonsStatistics}>
                    <li>Good: <span>{this.state.good}</span></li>
                    <li>Neutral: <span>{this.state.neutral}</span></li>
                    <li>Bad: <span>{this.state.bad}</span></li>
                    <li>Total: <span>{ this.countTotalFeedback() }</span></li>
                    <li>Positive feedback: <span>{ this.countPositiveFeedbackPercentage() }%</span></li>
                </ul>
            </div>
        )
    }
};

export default Feedback