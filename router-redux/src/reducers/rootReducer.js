
const initialState = {
    posts: [
        { id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'body one' },
        { id: 2, title: 'qui est esse', body: 'body two' },
        { id: 3, title: 'title 3', body: 'body three' },
        { id: 4, title: 'title 4', body: 'body four' },
        { id: 5, title: 'title 5', body: 'body five' }
    ]
};


const rootReducer = (state=initialState, action) => {
    console.log(action);
    if(action.type == 'DELETE-POST') {
        let newPosts = state.posts.filter(post => action.id !== post.id);
        return {
            ...state,        // to avoid overwriting other properties in the state
            posts: newPosts
        }
    }
    return state;
};



export default rootReducer;