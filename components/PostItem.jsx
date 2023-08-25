import React from 'react';
import Link from 'next/link';

const PostItem = ({ post }) => {
  return (
            <div className="bg-gray-100 p-6 rounded-lg transition duration-300 hover:bg-gray-200 mb-2 flex items-center">
        <div className="w-30 h-20 overflow-hidden rounded mr-5">
            <img
            src={post.featuredImage.url}
            alt={post.title}
            className="object-cover w-full h-full"
            />
        </div>
        <div className="flex flex-col">
            <Link href={`/post/${post.slug}`} className="text-lg font-medium text-gray-800 hover:underline mb-1">
            {post.title}
            </Link>
            <p className="text-gray-600">
            {post.categories && post.categories.map(category => category.name).join(', ')}
            </p>
        </div>
        </div>
  );
};

export default PostItem;