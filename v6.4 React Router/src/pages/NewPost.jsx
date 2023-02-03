
import { redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import NewPostForm from '../components/NewPostForm';
import { savePost } from '../util/api';

function NewPostPage() {
  //with this hook it allows you to return and control an action e.g err handling in this component
  const data = useActionData();
  const navigate = useNavigate();
  //Returns the current navigation, defaulting to an "idle" navigation when no navigation is in progress
  //and exposes that navigations information if and when we are doing some work
  const navigation = useNavigation();
 // use submitting to check if it's in a submitting state that then will allow us to disable our buttons on this submitting prop
  function cancelHandler() {
    navigate('/blog');
  }
  return (
    <>
    {data && data.status && <p>{data.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === 'submitting'}
      />
    </>
  );
}

export default NewPostPage;

export async function action({request}) {
  const formData = await request.formData();
  const post = {
    title: formData.get('title'),
    body: formData.get('post-text')
  };
  try {
    await savePost(post);
  } catch(err) {
    if(err.status === 422) {
      return err;
    }
    throw err;
  }
   return redirect('/blog');
};