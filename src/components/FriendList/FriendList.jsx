import PropTypes from 'prop-types';
import s from './FriendList.module.css';
export default function Friendlist({ params }) {
  return (
    <div className={s.box}>
      <ul className={s.list}>
        {' '}
        {params.map(param => (
          <li
            key={param.id}
            className={`${s.item} ${
              param.isOnline ? s.colorOnLine : s.colorOffLine
            }`}
          >
            <span
              className={s.onLine}
              style={{ backgroundColor: param.isOnline ? 'green' : 'red' }}
            >
              {param.isOnline ? 'on' : 'off'}{' '}
            </span>
            <img src={param.avatar} alt="{param.name} avatar" width="100" />
            <p className={s.name}>{param.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
Friendlist.propTypes = {
  params: PropTypes.arrayOf(PropTypes.shape({})),
  isOnline: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
