import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Posts from '../components/Posts';
import { getPosts } from '../util/api';

function BlogPostsPage() {
  //this hook gives us access to the loader data 
  //and thats the data that's returned by the loader function if it succeeds it's promise
  //this is how we fetch data with loaders this is really nice because now we don't have to useEffect 
const loaderData = useLoaderData();
  return (
    <>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={loaderData} />
    </>
  );
}

export default BlogPostsPage;

export function loader() {
  return getPosts();
}