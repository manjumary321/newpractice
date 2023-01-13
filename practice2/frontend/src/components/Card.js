import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <span className="title">{post.title}</span>
        <p className="desc">{post.desc}</p>
      </Link>
    </div>
  );
};

export default Card;