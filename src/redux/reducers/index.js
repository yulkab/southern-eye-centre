const initialState = {
  doctors: [],  
  loaded: false,
  loading: false,
  error: false

};

function rootReducer(state = initialState, action) {
  return state;
};

export default rootReducer;


// export function todoApp(state = initialState, action) {
//   if (typeof action.func === 'function') {
//       return action.func(state);
//   }
// }


// import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
// import * as reducers from 'reducers';
// import * as asyncInitialState from 'redux-async-initial-state';



// // We need outerReducer to replace full state as soon as it loaded
// const reducer = asyncInitialState.outerReducer(combineReducers({
//   ...reducers,
//   // We need innerReducer to store loading state, i.e. for showing loading spinner
//   // If you don't need to handle loading state you may skip it
//   asyncInitialState: asyncInitialState.innerReducer,
// }));

// // Load state function
// // Should return promise that resolves application state
// const loadStore = () => {
//   return new Promise(resolve => {
//     fetch('/store')
//       .then(response => response.json())
//       .then(resolve);
//   });
// }

// const store = createStore(
//   reducer,
//   compose(applyMiddleware(asyncInitialState.middleware(loadStore)))
// );


// export default rootReducer




// import {
//   SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
//   REQUEST_POSTS, RECEIVE_POSTS
// } from '../actions'

// const selectedSubreddit = (state = 'reactjs', action) => {
//   switch (action.type) {
//     case SELECT_SUBREDDIT:
//       return action.subreddit
//     default:
//       return state
//   }
// }

// const posts = (state = {
//   isFetching: false,
//   didInvalidate: false,
//   items: []
// }, action) => {
//   switch (action.type) {
//     case INVALIDATE_SUBREDDIT:
//       return {
//         ...state,
//         didInvalidate: true
//       }
//     case REQUEST_POSTS:
//       return {
//         ...state,
//         isFetching: true,
//         didInvalidate: false
//       }
//     case RECEIVE_POSTS:
//       return {
//         ...state,
//         isFetching: false,
//         didInvalidate: false,
//         items: action.posts,
//         lastUpdated: action.receivedAt
//       }
//     default:
//       return state
//   }
// }

// const postsBySubreddit = (state = { }, action) => {
//   switch (action.type) {
//     case INVALIDATE_SUBREDDIT:
//     case RECEIVE_POSTS:
//     case REQUEST_POSTS:
//       return {
//         ...state,
//         [action.subreddit]: posts(state[action.subreddit], action)
//       }
//     default:
//       return state
//   }
// }

// const rootReducer = combineReducers({
//   postsBySubreddit,
//   selectedSubreddit
// })

// export default rootReducer