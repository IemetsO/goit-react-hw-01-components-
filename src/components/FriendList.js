import PropTypes from "prop-types"
import FriendListItem from "./FriendListItem"

function FriendList ({friends}) {
    return(
        <ul class="friend-list">
            {friends.map(friend =>  
            <FriendListItem
            key = {friend.id}
            isOnline={friend.isOnline}
            avatar ={friend.avatar}
            name={friend.name}
            />
            )}
</ul>
    )
}

FriendList.propTypes = {
friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
}))
}

export default FriendList