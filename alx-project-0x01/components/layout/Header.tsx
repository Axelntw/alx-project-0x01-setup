import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">
          My App
        </Link>
        <div className="space-x-4">
          <Link href="/posts" className="hover:text-gray-300">Posts</Link>
          <Link href="/users" className="hover:text-gray-300">Users</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
