import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/auth/AuthContext';
import axios from 'axios'
const Home = () => {
  // /const {user} = useContext(AuthContext);
  const[data,setdata]=useState([]);
  const[flag,setFlag]=useState(0);

  useEffect(()=>{
    axios.get('http://localhost:5500/')
    .then((res)=>{
      setdata(res.data.result);
    }).catch((err)=>{
      console.log(err);  
    })
  },[flag])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">News Feed</h1>
      <div className="space-y-6">
        {data.map((post) => (
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
