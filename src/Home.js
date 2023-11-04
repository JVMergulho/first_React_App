import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data:posts , isPending, error } = useFetch('http://localhost:8000/posts')
    
    return (
        <div className="home">
            { error && <div style={{color:"red"}}>{ error }</div>}
            {isPending && <h3>Loading...</h3>}
            {posts && <BlogList posts={ posts } title="All posts" />}
        </div>
    )
}
 
export default Home;