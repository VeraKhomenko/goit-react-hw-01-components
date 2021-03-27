import React from 'react';

import stats from './statistical-data.json';
import friends from './friends.json';
import user from './user.json';
import items from './transactions.json';
import ProfileGeneral from './components/ProfileGeneral/ProfileGeneral';
// import Profile from './components/Profile/Profile';
// import ProfileList from './components/ProfileList/ProfileList';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import Layout from './components/Layout/Layout';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <Layout>
      <ProfileGeneral user={user} />

      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />

      <TransactionHistory items={items} />
    </Layout>
  );
}
export default App;
