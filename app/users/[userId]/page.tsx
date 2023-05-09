import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import { Suspense } from "react"
import UserPosts from "./components/userPosts"
import { Metadata } from "next"


interface Params {
  params: {
    userId: string
  }
}

export async function generateMetadata({params: {userId}}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData
  return {
    title: user.name,
    description: `This is the page of ${user.name}`
  }
}

export default async function User({ params: {userId}}: Params) {
  const userData: Promise<User> = getUser(userId)
  const userPostsData: Promise<Post[]> = getUserPosts(userId)

  // const [user, userPosts] = await Promise.all([userData, userPostsData])

  const user = await userData

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Server componet */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  )
}