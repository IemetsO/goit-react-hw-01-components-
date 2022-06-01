import Statistics from './Statistics';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function StatisticList({ title, items }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {items.map(({id, label, percentage}) => (         
          <Statistics
            key={id}
            label={label}
            percentage={percentage}
          />
        ))}
      </ul>
    </section>
  );
}

StatisticList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatisticList;
