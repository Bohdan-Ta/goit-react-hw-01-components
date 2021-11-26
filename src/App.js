import Section from './components/Section';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import data from './JSON/data.json';
import user from './JSON/user.json';
import friends from './JSON/friends.json';
import transactions from './JSON/transactions.json';

export default function App() {
  return (
    <div>
      <Section>
        <Profile
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </Section>

      <Section title="Upload stats">
        <Statistics datas={data} />
      </Section>

      <Section>
        <FriendList params={friends} />
      </Section>

      <Section>
        <TransactionHistory transactions={transactions} />
      </Section>
    </div>
  );
}
