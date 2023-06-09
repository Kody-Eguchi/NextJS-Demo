export default async function getUserPosts(userId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?${userId}`, { next: {revalidate: 60}})

  if(!res.ok) throw new Error('Data Fetching Failed!')

  return res.json()

}