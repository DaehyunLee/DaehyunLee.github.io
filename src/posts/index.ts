import { metadata as firstPostMeta, Content as FirstPostContent } from './first-post'

export interface PostMeta {
  id: string
  title: string
  date: string
  excerpt: string
  tags: string[]
}

export interface Post extends PostMeta {
  Content: React.ComponentType
}

// Add new posts here - just import and add to the array
export const posts: Post[] = [
  { ...firstPostMeta, Content: FirstPostContent },
]

// Helper to find a post by ID
export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id)
}
