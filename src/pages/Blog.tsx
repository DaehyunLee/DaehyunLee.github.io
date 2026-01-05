import { Link } from 'react-router-dom'
import { posts } from '../posts'

export default function Blog() {
  return (
    <div className="page blog-page">
      <h1 className="page-title">Blog</h1>
      <p className="page-subtitle">Thoughts, tutorials, and things I've learned.</p>
      
      <div className="posts-list">
        {posts.map((post) => (
          <article key={post.id} className="post-card">
            <div className="post-meta">
              <time>{post.date}</time>
              <div className="post-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="post-title">
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="read-more">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
