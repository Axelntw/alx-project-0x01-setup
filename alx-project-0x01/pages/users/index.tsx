import UserCard from '../../components/common/UserCard';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import UserModal from '../../components/common/UserModal';
import { UserProps, UserData } from '../../interfaces';
import React, { useState } from "react";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<UserProps[]>(posts);

  const handleAddUser = (user: UserData) => {
    const newUser: UserProps = {
      ...user,
      id: users.length ? users[users.length - 1].id + 1 : 1,
    };
    setUsers([...users, newUser]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Users</h1>
          <button
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
            onClick={() => setShowModal(true)}
          >
            Add User
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
        {showModal && (
          <UserModal
            onClose={() => setShowModal(false)}
            onSubmit={handleAddUser}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
