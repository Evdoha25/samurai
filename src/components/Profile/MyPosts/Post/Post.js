import React from "react";
import s from './Post.module.css';



const Post = (props) => {
    return(
        <div className={s.nav_item}>{props.message} + " " + {props.likesCount} </div>
    )
}


export default Post;