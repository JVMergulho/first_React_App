const BlogList = ({posts, title}) => {

    return ( 
        <div>
        <h2>{ title }</h2>
            {posts.map((post) => (
                <div className="blog-preview" key={post.id}>
                    <h2>{ post.title }</h2>
                    <p>Written by { post.author }</p>
                </div>
            ))}
        </div> 
    );
}
 
export default BlogList;