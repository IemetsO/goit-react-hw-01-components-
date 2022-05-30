import PropTypes from "prop-types"

function FriendListItem ({isOnline, avatar, name}){
    return (
    <li class="item">
    <span class="status">{isOnline}</span>
    <img class="avatar" src={avatar} alt="User avatar" width="48" />
    <p class="name">{name}</p>
  </li>)
}


FriendListItem.propTypes = {
isOnline: PropTypes.bool.isRequired,
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired
}

export default FriendListItem