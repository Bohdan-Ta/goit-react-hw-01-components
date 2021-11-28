import PropTypes from 'prop-types';
import randomColor from '../RandomColor/RandomColor';
import s from './Statistics.module.css';

export default function Statistics({ datas }) {
  return (
    <div className={s.container}>
      <ul className={s.item}>
        {datas.map(date => (
          <li
            key={date.id}
            className={s.list}
            style={{
              borderColor: randomColor(),
            }}
          >
            <span className={s.label}>{date.label}</span>
            <span className={s.percentage}>{date.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.shape({})),
  label: PropTypes.string,
  percentage: PropTypes.number,
};
