import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h2>404 ERROR</h2>
            <p>The page cannot be found</p>
            <Link to='/'>Back to the homepage</Link>
        </div>
     );
}
 
export default NotFound;