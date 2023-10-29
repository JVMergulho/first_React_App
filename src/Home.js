import {useState } from "react"
import BlogList from "./BlogList";

const Home = () => {

    const [posts, setPosts] = useState([
        {title:"101 sharks", body:"lorem ipsum...", author:"Sir Ian Mckellen", id:1},
        {title:"Deep sea adventure", body:"lorem ipsum...", author:"Lord Voldemort", id:2},
        {title:"Big monsters atack New York", body:"lorem ipsum...", author:"Fernando Pessoa", id:3},
    ])

    const handleDelete = (id) => {
        const newPosts = posts.filter((post) => post.id != id)
        setPosts(newPosts)
    }
    
    return (  
        <BlogList posts={ posts } title="All posts" handleDelete={ handleDelete }/>
    );
}
 
export default Home;