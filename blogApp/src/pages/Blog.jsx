import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [formVisible, setFormVisible] = useState(null);
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(0);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5500/read", { withCredentials: true })
      .then((res) => {
        setData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [flag]);

  const handleAddClick = () => {
    setFormData({ id: "", title: "", description: "" });
    setFormVisible("add");
  };

  const handleCancel = () => {
    setFormVisible(null);
  };

  const handleEditClick = (card) => {
    setFormData(card);
    setFormVisible("edit");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formVisible === "add") {
      axios
        .post("http://localhost:5500/", formData, { withCredentials: true })
        .then(() => {
          setFlag(flag + 1);
          setFormVisible(null);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (formVisible === "edit") {
      axios
        .put(`http://localhost:5500/${formData.id}`, formData, {
          withCredentials: true,
        })
        .then(() => {
          setFlag(flag + 1);
          setFormVisible(null);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleDeleteClick = (id) => {
    axios
      .delete(`http://localhost:5500/${id}`, { withCredentials: true })
      .then(() => {
        setFlag(flag + 1);
      })
      .catch((err) => {
        console.log("Error deleting post:", err);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Posts</h1>
        <button
          onClick={handleAddClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md mb-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => handleEditClick(item)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteClick(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {formVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              {formVisible === "add" ? "Add New Post" : "Edit Post"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  {formVisible === "add" ? "Add" : "Submit"}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
