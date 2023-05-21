import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import css from './Statistics.module.css';

class Statistics extends Component {
    render () {
    return (
        <div>
        <h2>Statistics</h2>
        <ul className={css.buttonsStatistics}>
            <li>Good: <span>{this.props.good}</span></li>
            <li>Neutral: <span>{this.props.neutral}</span></li>
            <li>Bad: <span>{this.props.bad}</span></li>
            <li>Total: <span>{this.props.total}</span></li>
            <li>Positive feedback: <span>{this.props.positivePercentage}%</span></li>
        </ul>
        </div>
        );
    }
};

export default Statistics