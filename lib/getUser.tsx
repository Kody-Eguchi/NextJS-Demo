export default async function getUser(userId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

  if(!res.ok) undefined;

  return res.json()

}
