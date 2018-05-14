export const BLOGS = 'BLOGS';
export const SUCCESS_STORIES = 'SUCCESS_STORIES';

export const setBlogs = ({ value }) => ({
  type: BLOGS,
  payload: value
});

export const setStories = ({ value }) => ({
  type: SUCCESS_STORIES,
  payload: value
});