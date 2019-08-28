import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach(id => dispatch(fetchUser(id)));

  _.chain(getState.posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const resposne = await jsonPlaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: resposne.data });
  };
};

export const fetchUser = id => async dispatch => {
  const resposne = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: resposne.data });
};

//Memoization - only one time
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const resposne = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: resposne.data });
// });
