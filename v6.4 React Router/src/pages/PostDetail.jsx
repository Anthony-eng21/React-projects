
import { useLoaderData } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import { getPost } from '../util/api';

function PostDetailPage() {
  //get the loader data and render them as props for parent Component
  const postData =  useLoaderData();
  return (
    <>
      <BlogPost title={postData.title} text={postData.body} />
    </>
  );
}

export default PostDetailPage;
//loader has access to the url params field 
export function loader({ params }) {
  const postId = params.id
  return getPost(postId);
};