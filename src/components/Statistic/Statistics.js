import PropTypes from 'prop-types';
import s from './StatisticItem.module.css';

export default function Statistics({ label, percentage }) {
  return (
    <div className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </div>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
