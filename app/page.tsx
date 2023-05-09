import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
     <h1>Hello World!</h1>
     <ul>
      <li>
        <Link href="/about">Go to About Page</Link>
      </li>
      <li>
        <Link href="/users">Go to Users Page</Link>
      </li>
     </ul>
     
     
    </main>
  )
}
