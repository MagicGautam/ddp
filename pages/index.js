import Head from 'next/head'

import {PostCard ,Categories ,PostWidget} from '../components'
import {getPosts} from '../services';
import { FeaturedPosts } from '@/sections';


export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>दैनिक दतिया प्रकाश</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post) => <PostCard post={post.node} key={post.title} />)}
          </div>
          <div className="lg:col-span-4 col-span-1">
              <div className="lg:sticky sticky top-8">
                <PostWidget />
                <Categories />
              </div>
          </div>
        </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getPosts() || [];

  // Sort posts by createdAt in descending order
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.node.createdAt);
    const dateB = new Date(b.node.createdAt);
    return dateB - dateA;
  });

  return {
    props: { posts: sortedPosts }
  };
}



