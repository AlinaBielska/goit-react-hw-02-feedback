import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
    render () {
    return (
        <ul className={css.buttonsFeedback}>
        {this.props.options.map((data) => (
                <li key={data.id}>
                    <button type="button" onClick={() => this.props.onLeaveFeedback(data.id)}>{data.option}</button>
                </li>
        ))}
        </ul>
    );
}};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
};

