import { BLOGS, SUCCESS_STORIES } from "../actions/posts";

const initialState = {
  blogs: undefined,
  success_stories: undefined
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case BLOGS:
      return Object.assign({}, state, {
        blogs: payload
      });
    
    case SUCCESS_STORIES:
      return Object.assign({}, state, {
        stories: payload
      });

    default:
      return state;
  }
};
