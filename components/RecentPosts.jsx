import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';
import { getRecentPosts } from '@/services';

const RecentPosts = () => {

  const [recentPosts, setRecentPosts] = useState([]);
  
  useEffect(() => {
    getRecentPosts()
      .then(result => {
        setRecentPosts(result);
      });
  }, []);

  return (
    <div className="bg-gray-100 p-6 rounded-lg transition duration-300 hover:bg-gray-200">
      <h2 className="text-2xl font-semibold mb-4">पढ़ना जारी रखें....</h2>
      
      {
        recentPosts.map((post, index) => (
          <div key={post.slug} className={`flex items-center space-x-4 mb-4 ${index < recentPosts.length - 1 ? 'border-b pb-4' : ''}`}>
            <div className="w-16 h-16 overflow-hidden rounded">
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <Link href={`/post/${post.slug}`} key={post.title} className="text-lg font-medium text-gray-800 hover:underline">                 
                {post.title}
              </Link>
              <p className="text-gray-600">
                {post.categories && post.categories.map(category => category.name).join(', ')}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default RecentPosts;