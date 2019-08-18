import axios from 'axios';
import { SET_POSTS } from './actionTypes';

export const addPost = post => async dispatch => {
  const res = await axios({
    url: 'uploadImage',
    baseURL:
      'https://us-central1-instaclone2-37e57.cloudfunctions.net/helloWorld',
    method: 'post',
    data: {
      image: post.image.base64,
    },
  });

  post.image = res.data.imageUrl;
  await axios.post('/posts.json', { ...post });
  dispatch(fetchPosts());
};

export const addComment = payload => async dispatch => {
  const postUri = `/posts/${payload.postId}.json`;
  const res = await axios.get(postUri);
  const comments = res.data.comments || [];
  comments.push(payload.comment);
  await axios.patch(postUri, { comments });
  dispatch(fetchPosts());
};

export const setPosts = posts => ({
  type: SET_POSTS,
  payload: posts,
});

export const fetchPosts = () => dispatch => {
  axios
    .get('/posts.json')
    .then(res => {
      const rawPosts = res.data;
      const posts = [];
      for (const key in rawPosts) {
        posts.push({
          ...rawPosts[key],
          id: key,
        });
      }

      dispatch(setPosts(posts.reverse()));
    })
    .catch(err => console.log(err));
};
