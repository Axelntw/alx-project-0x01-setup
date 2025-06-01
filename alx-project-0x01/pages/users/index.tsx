import Header from '../../components/layout/Header';

const Users: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* User content will go here */}
        </div>
      </main>
    </div>
  );
};

export default Users;
