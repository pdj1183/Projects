export async function loadPosts() {
  const res = await fetch('http://localhost:3000/api/posts/')
  const data = await res.json()
  return data.posts
}
