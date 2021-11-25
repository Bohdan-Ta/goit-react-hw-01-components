import PropTypes from 'prop-types';

export default function Statistics({ datas }) {
  return (
    <ul>
      {' '}
      {datas.map(date => (
        <li key={date.id}>
          <span>{date.label}</span>
          <span>{date.percentage}</span>
        </li>
      ))}
    </ul>
  );
}

Statistics.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.shape({})),
};
