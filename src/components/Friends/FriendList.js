import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './Friends.module.css';

function FriendList({ friends }) {
  return (
    <div className={s.section}>
      <ul className={s.list}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
