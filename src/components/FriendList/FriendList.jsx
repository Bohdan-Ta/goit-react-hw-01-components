import PropTypes from 'prop-types';
import s from './FriendList.module.css';
export default function Friendlist({ params }) {
  return (
    <ul className={s.list}>
      {' '}
      {params.map(param => (
        <li key={param.id} className={s.item}>
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
