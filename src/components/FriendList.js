import PropTypes from 'prop-types';

export default function Friendlist({ params }) {
  return (
    <ul>
      {' '}
      {params.map(param => (
        <li key={param.id}>
          <span>{param.isOnline}</span>
          <img src={param.avatar} alt="{param.name} avatar" width="48" />
          <p>{param.name}</p>
        </li>
      ))}
    </ul>
  );
}
Friendlist.propTypes = {
  params: PropTypes.arrayOf(PropTypes.shape({})),
  isOnline: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
