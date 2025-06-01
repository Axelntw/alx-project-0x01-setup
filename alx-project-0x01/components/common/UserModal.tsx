import React, { useState } from "react";
import { UserModalProps, UserData } from "@/interfaces";

const initialState: UserData = {
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState<UserData>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else if (name.startsWith("geo.")) {
      const key = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [key]: value },
        },
      }));
    } else if (name.startsWith("company.")) {
      const key = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        company: { ...prev.company, [key]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    onClose();
    setForm(initialState);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full border p-2 rounded" required />
          <input name="username" value={form.username} onChange={handleChange} placeholder="Username" className="w-full border p-2 rounded" required />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded" required />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full border p-2 rounded" />
          <input name="website" value={form.website} onChange={handleChange} placeholder="Website" className="w-full border p-2 rounded" />
          <input name="address.street" value={form.address.street} onChange={handleChange} placeholder="Street" className="w-full border p-2 rounded" />
          <input name="address.suite" value={form.address.suite} onChange={handleChange} placeholder="Suite" className="w-full border p-2 rounded" />
          <input name="address.city" value={form.address.city} onChange={handleChange} placeholder="City" className="w-full border p-2 rounded" />
          <input name="address.zipcode" value={form.address.zipcode} onChange={handleChange} placeholder="Zipcode" className="w-full border p-2 rounded" />
          <input name="geo.lat" value={form.address.geo.lat} onChange={handleChange} placeholder="Geo Latitude" className="w-full border p-2 rounded" />
          <input name="geo.lng" value={form.address.geo.lng} onChange={handleChange} placeholder="Geo Longitude" className="w-full border p-2 rounded" />
          <input name="company.name" value={form.company.name} onChange={handleChange} placeholder="Company Name" className="w-full border p-2 rounded" />
          <input name="company.catchPhrase" value={form.company.catchPhrase} onChange={handleChange} placeholder="Catch Phrase" className="w-full border p-2 rounded" />
          <input name="company.bs" value={form.company.bs} onChange={handleChange} placeholder="BS" className="w-full border p-2 rounded" />
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
