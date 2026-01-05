import { useParams, Link } from 'react-router-dom'
import { getPostById } from '../posts'

export default function BlogPost() {
  const { id } = useParams<{ id: string }>()
  const post = id ? getPostById(id) : null

  if (!post) {
    return (
      <div className="page blog-post-page">
        <h1 className="page-title">Post Not Found</h1>
        <p>Sorry, that post doesn't exist.</p>
        <Link to="/blog" className="back-link">← Back to Blog</Link>
      </div>
    )
  }

  const { Content } = post

  return (
    <div className="page blog-post-page">
      <article className="blog-post">
        <header className="post-header">
          <Link to="/blog" className="back-link">← Back to Blog</Link>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <time>{post.date}</time>
            <div className="post-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </header>
        <div className="post-content">
          <Content />
        </div>
      </article>
    </div>
  )
}
