import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Users: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        <div className="grid gap-4">
          {/* User list will go here */}
          <p>User list coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Users;
