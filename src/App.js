import Section from './components/Section';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import data from './JSON/data.json';
import user from './JSON/user.json';
import friends from './JSON/friends.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Section title="Upload stats">
        <Statistics datas={data} />
      </Section>

      <Section>
        <FriendList params={friends} />
      </Section>
    </div>
  );
}
