import Profile from "./Profile";
import user from ".././user.json"
import StatisticList from "./StatisticList";
import items from ".././data.json"
import friends from ".././friends.json"
import FriendList from "./FriendList";
import transactions from ".././transactions.json";
import TransactionHistory from "./TransactionHistory";


export default function App() {
  return (<div>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
/>

<StatisticList title="Upload stats" items = {items}/>

<FriendList friends = {friends}/>
<TransactionHistory items ={transactions}/>
</div>
)
}



