import { useHistory, useParams } from "react-router-dom"
import useFetch from "./useFetch";

const BlogDetails = () => {
const { id } = useParams()
const { data: post, error, isPending } = useFetch('http://localhost:8000/posts/' + id)
const history = useHistory()

const handleClick = () => {
    fetch('http://localhost:8000/posts/' + post.id, {
        method: 'DELETE'
    }).then(() => {
        history.push('/')
    })
}

    return ( 
        <div className="blog-details">
             { error && <div style={{color:"red"}}>{ error }</div>}
             { isPending && <h3>Loading...</h3> }
            { post && (
                <article>
                    <h2>{ post.title }</h2>
                    <p>Written by { post.author }</p>
                    <div>{ post.body }</div>
                    <button onClick={handleClick}> delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;