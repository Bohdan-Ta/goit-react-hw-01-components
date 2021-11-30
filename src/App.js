import data from './data/data.json';
import user from './data/user.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import Section from './components/Section';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

export default function App() {
  return (
    <div>
      <Section title="Profile">
        <Profile
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </Section>

      <Section title="Upload stats">
        <Statistics stats={data} />
      </Section>

      <Section title="Friends">
        <FriendList params={friends} />
      </Section>

      <Section title="Transaction history">
        <TransactionHistory transactions={transactions} />
      </Section>
    </div>
  );
}
