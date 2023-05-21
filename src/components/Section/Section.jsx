import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({title, children}) => {
    return (
        <div className={css.feedback}>
        <h2>{title}</h2>
        {children}
        </div>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
};

export default Section