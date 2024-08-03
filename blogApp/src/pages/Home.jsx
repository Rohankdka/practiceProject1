import React from 'react';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'First Post',
      description: 'This is the description for the first post. It could be a brief summary or an interesting update.',
    },
    {
      id: 2,
      title: 'Second Post',
      description: 'This is the description for the second post. Here, you can add more details about this particular update or news.',
    },
    {
      id: 3,
      title: 'Third Post',
      description: 'Description for the third post goes here. This can be used to provide additional information or updates.',
    },
    // Add more posts as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">News Feed</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
