export const metadata = {
  id: 'first-post',
  title: 'My First Post',
  date: '2025-02-13',
  excerpt: 'Welcome to my new blog! This is where it all begins.',
  tags: ['intro'],
}

export function Content() {
  return (
    <>
      <p>Welcome to my new blog.</p>
      <p>
        After years of meaning to set one up, here we are. The plan is to write about 
        things I'm building, things I'm learning, and occasionally things I find interesting.
      </p>
      <p>No promises on consistency. But that's fine.</p>
      <p>Let's see where this goes.</p>
    </>
  )
}
