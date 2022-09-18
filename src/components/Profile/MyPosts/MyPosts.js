import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";




const MyPosts = (props) => {

    // let posts = [{id: 1, message:"Hello",likesCount: 12},{id: 2, message:"Buy",likesCount: 11}];

    let postsElements = props.posts.map((p) => {
       return <Post message = {p.message} likesCount = {p.likesCount}/>
    });

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }


    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }


    return (
        <div className={s.posts}>
          <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>

    )
}



export default MyPosts;