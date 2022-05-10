import React, {useState} from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";


function PostList({post, title, remove}){
    return(
        <div>
            <div style={{textAlign:"center", fontSize:'36px', fontWeight:'bold'}}>{title}</div>
            <TransitionGroup>
                {post.map((post, index) => 
                    <CSSTransition
                        key = {post.id}
                        timeout = {500}
                        classNames = "post"    
                    >
                        <PostItem remove = {remove} number = {index+1} post = {post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostList;