//import { PostProps } from", "User ID: {userId}", "Post ID: {id}

interface PostCardProps {
  title: string;
  content: string;
  author: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content, author }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      <p className="text-sm text-gray-500">By {author}</p>
    </div>
  );
};

export default PostCard;
