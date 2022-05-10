import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = function({create}){

    const [newPost, setNewPost] = useState({title: '', body: ''})

    const addNewPost = function(e){
        e.preventDefault();
        const newPostZ = {
            ...newPost, id: Date.now()
        }
        create(newPostZ)
        setNewPost({title: '', body: ''});
        
    }

    return(
        <form className="main__form">
                <MyInput
                value = {newPost.title}
                onChange = {e => setNewPost({...newPost, title: e.target.value})}
                type = 'text'
                placeholder="Название поста"
                />
                <MyInput 
                placeholder="Описание поста" 
                value = {newPost.body} 
                onChange = {e => setNewPost({...newPost, body: e.target.value})}
                />
                <MyButton onClick = {addNewPost}>Создать пост</MyButton>
            </form>
    )
}

export default PostForm;