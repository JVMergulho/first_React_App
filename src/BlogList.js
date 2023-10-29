const BlogList = ({posts, title, handleDelete}) => {

    return ( 
        <div className="home">
        <h2>{ title }</h2>
            {posts.map((post) => (
                <div className="blog-preview" key={post.id}>
                    <h2>{ post.title }</h2>
                    <p>Written by { post.author }</p>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
            ))}
        </div> 
    );
}
 
export default BlogList;