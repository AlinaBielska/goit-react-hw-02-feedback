import React, { Component } from "react";

class Feedback extends Component {
    constructor() {
        super();

        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    changeFeedback = (type) => {
        this.setState(prevState => ({[type]: prevState[type] + 1}));
    }

    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <ul>
                    <li><button type="button" onClick={() => this.changeFeedback("good")}>Good</button></li>
                    <li><button type="button" onClick={() => this.changeFeedback("neutral")}>Neutral</button></li>
                    <li><button type="button" onClick={() => this.changeFeedback("bad")}>Bad</button></li>
                </ul>
                <h2>Statistics</h2>
                <ul>
                    <li>Good: <span>{this.state.good}</span></li>
                    <li>Neutral: <span>{this.state.neutral}</span></li>
                    <li>Bad: <span>{this.state.bad}</span></li>
                </ul>
            </div>
        )
    }
};

export default Feedback