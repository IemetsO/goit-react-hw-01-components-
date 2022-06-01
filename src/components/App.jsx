import Profile from './Profile/Profile';
import user from "./data/user.json";
import StatisticList from './Statistic/StatisticList';
import items from './data/data.json';
import friends from './data/friends.json';
import FriendList from './Friends/FriendList';
import transactions from './data/transactions.json';
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
        stats={user.stats}
      />
      <StatisticList title="UPLOAD STATS" items={items} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
