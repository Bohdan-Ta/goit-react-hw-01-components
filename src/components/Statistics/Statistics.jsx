import PropTypes from 'prop-types';
import randomColor from '../../helpers/randomColor';
import s from './Statistics.module.css';

export default function Statistics({ stats }) {
  return (
    <div className={s.container}>
      <ul className={s.item}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={s.list}
            style={{
              borderColor: randomColor(),
            }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({})),
  label: PropTypes.string,
  percentage: PropTypes.number,
};
