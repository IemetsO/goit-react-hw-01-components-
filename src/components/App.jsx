import Profile from './Profile/Profile';
import user from '.././user.json';
import StatisticList from './Statistic/StatisticList';
import items from '.././data.json';
import friends from '.././friends.json';
import FriendList from './Friends/FriendList';
import transactions from '.././transactions.json';
import TransactionHistory from './Transactions/TransactionHistory';
import "modern-normalize/modern-normalize.css"

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticList title="UPLOAD STATS" items={items} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
