"use client"

import { useState, useEffect } from "react"
import toast, { Toaster } from "react-hot-toast";

export default function Page() {
  const [user, setuser] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ title: "", status: "" });

  useEffect(() => {
    fetchuser();
  }, []);

  const fetchuser = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/users`);
      const data = await res.json();
      setuser(data);
    } catch (err) {
      toast.error("Failed to fetch user");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setuser(prev => prev.filter(user => user._id !== id));
        toast.success("user deleted successfully");
      } else {
        toast.error("Failed to delete");
      }
    } catch (err) {
      toast.error("Failed to delete");
    }
  };

  const handleEditClick = (user) => {
    setEditingId(user._id);
    setEditData({ title: user.title, status: user.status });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      });

      if (res.ok) {
        const updateduser = await res.json();
        setuser(prev =>
          prev.map(user => (user._id === id ? updateduser : user))
        );
        setEditingId(null);
        toast.success("Edit successful");
      } else {
        toast.error("Failed to edit");
      }
    } catch (err) {
      toast.error("Error occurred while editing");
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 m-auto p-4 py-8  w-[60%]">
        {user.map((user) => (
          <div
            key={user._id}
            className="max-w-sm bg-white  rounded-lg shadow-xl "
          >
            <div className="p-5">
              {editingId === user._id ? (
                <>
                  <input
                    type="text"
                    name="title"
                    value={editData.title}
                    onChange={handleEditChange}
                    placeholder="Title"
                    className="mb-2 w-full p-2 text-sm rounded-lg border dark:bg-gray-700 dark:text-white"
                  />
                  <input
                    type="text"
                    name="status"
                    value={editData.status}
                    onChange={handleEditChange}
                    placeholder="Status"
                    className="mb-3 w-full p-2 text-sm rounded-lg border dark:bg-gray-700 dark:text-white"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => handleSave(user._id)}
                      className="px-4 py-1 text-sm text-white bg-blue-400 rounded hover:bg-blue-300"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-4 py-1 text-sm text-white bg-gray-700 rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {user.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-1">
                    {user.status}
                  </p>
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => handleEditClick(user)}
                      className="px-4 py-1 text-sm text-white bg-blue-950 rounded hover:bg-blue-900 "
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="px-4 py-1 text-sm text-white bg-red-900 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
