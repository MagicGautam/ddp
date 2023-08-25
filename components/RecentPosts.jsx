import React, { useEffect, useState } from 'react';
import { getRecentPosts } from '@/services';
import PostItem from './PostItem';

const RecentPosts = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    getRecentPosts()
      .then(result => {
        setRecentPosts(result);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">पढ़ना जारी रखें....</h2>
      {recentPosts.map(post => (
        <PostItem key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default RecentPosts;