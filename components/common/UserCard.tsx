import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => (
  <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="mb-2">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-500">@{username}</p>
    </div>
    <p className="text-gray-600 mb-2">{email}</p>
    <p className="text-gray-600 mb-2">{phone}</p>
    <p className="text-gray-600 mb-2">
      {address.street}, {address.suite}, {address.city}, {address.zipcode}
    </p>
    <p className="text-blue-600 mb-2">
      <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a>
    </p>
    <div className="mt-4 text-sm text-gray-500">
      <span className="font-semibold">{company.name}</span>
      <div>{company.catchPhrase}</div>
      <div>{company.bs}</div>
    </div>
  </div>
);

export default UserCard;
