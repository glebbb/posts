import React, {useState, useMemo} from "react";
import styles from './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal.jsx/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App(){
    const [post, setPosts] = useState([
        {id:1, title:'JavaScript', body:"easy"},
        {id:2, title:'Python', body:"easy"},
        {id:3, title:'C++', body:"hard"},
        {id:4, title:'Ruby', body:"medium"},
    ])
    
    const createPost = (newPostZ) => {
        setPosts([...post, newPostZ]);
        setModal(false);
    } 
    
    const [modal, setModal] = useState(false)
    
    const removePost = (posts) => {
        setPosts(post.filter(p => p.id !== posts.id));
    }
    
    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(()=>{
        if(filter.sort){
            return [...post].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
        }
        return post;
    }, [filter.sort, post]);
    
    const sortedAndSearchedPost = useMemo(()=>{
        return  sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    return(
        <div className="App">
            <MyButton style={{marginTop: '20px', marginLeft:'330px'}} onClick={() => setModal(true)}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}> 
                <PostForm create = {createPost} setModal = {setModal}/>
            </MyModal>
            <PostFilter 
                filter={filter} 
                setFilter={setFilter}
            />
            {sortedAndSearchedPost.length !== 0 ?
                <PostList post = {sortedAndSearchedPost} title = 'Список постов' remove = {removePost}/>
                :
                <div style={{fontSize: '36px', color:'teal',textAlign:'center'}}>Тут пока ничего нет...</div>
            }
        </div> 
    )
}   

export default App;